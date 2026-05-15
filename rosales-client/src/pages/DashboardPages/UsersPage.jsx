import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  fetchUsers,
  createUser,
  updateUser,
} from "../../services/UserService";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "90vh",
  overflowY: "auto",
};

const defaultUser = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  contactNumber: "",
  email: "",
  username: "",
  password: "",
  address: "",
  type: "viewer",
  isActive: true,
};

const getUsersFromResponse = (data) =>
  Array.isArray(data) ? data : data.users || [];

const UsersPage = () => {
  const userType = localStorage.getItem("type");
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState(defaultUser);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const { data } = await fetchUsers();

      setUsers(getUsersFromResponse(data));
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadInitialUsers = async () => {
      try {
        const { data } = await fetchUsers();

        if (isMounted) {
          setUsers(getUsersFromResponse(data));
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadInitialUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  if (userType !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  const handleOpen = () => {
    setIsEditing(false);
    setEditUserId(null);
    setNewUser(defaultUser);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setEditUserId(null);
    setNewUser(defaultUser);
  };

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user._id === id);

    if (userToEdit) {
      setNewUser({
        ...defaultUser,
        ...userToEdit,
        password: "",
      });
      setEditUserId(id);
      setIsEditing(true);
      setOpen(true);
    }
  };

  const handleSaveUser = async () => {
    try {
      const userData = { ...newUser };

      if (isEditing && !userData.password) {
        delete userData.password;
      }

      if (isEditing) {
        await updateUser(editUserId, userData);
      } else {
        await createUser(userData);
      }

      await loadUsers();
      handleClose();
    } catch (error) {
      console.error("Error saving user:", error.response?.data || error.message);
    }
  };

  const handleToggleActive = async (id, isActive) => {
    try {
      await updateUser(id, { isActive: !isActive });
      await loadUsers();
    } catch (error) {
      console.error("Error toggling user status:", error.response?.data || error.message);
    }
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      valueGetter: (params) =>
        `${params.row?.firstName || ""} ${params.row?.lastName || ""}`,
    },
    { field: "age", headerName: "Age", flex: 1, sortable: true },
    { field: "gender", headerName: "Gender", flex: 1, sortable: true },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "type", headerName: "Type", flex: 1, sortable: true },
    { field: "contactNumber", headerName: "Contact", flex: 1 },
    { field: "username", headerName: "Username", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleEdit(params.row._id)}
          >
            Edit
          </Button>

          <Switch
            checked={Boolean(params.row.isActive)}
            onChange={() =>
              handleToggleActive(params.row._id, params.row.isActive)
            }
            color="primary"
          />
        </Box>
      ),
    },
  ];

  return (
    <>
      <Stack
        direction="row"
        sx={{
          marginBottom: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Users
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleIcon />}
          onClick={handleOpen}
          sx={{
            position: "fixed",
            right: "20px",
            top: "100px",
            zIndex: 1000,
          }}
        >
          Add User
        </Button>
      </Stack>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="add-user-modal"
        aria-describedby="add-user-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            {isEditing ? "Edit User" : "Add User"}
          </Typography>

          <Stack
            id="transition-modal-description"
            direction="column"
            spacing={3}
            sx={{ mt: 2 }}
          >
            <FormControl fullWidth variant="standard">
              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  label="Enter first name"
                  variant="standard"
                  value={newUser.firstName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, firstName: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  label="Enter last name"
                  variant="standard"
                  value={newUser.lastName}
                  onChange={(e) =>
                    setNewUser({ ...newUser, lastName: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  label="Enter age"
                  variant="standard"
                  value={newUser.age}
                  onChange={(e) =>
                    setNewUser({ ...newUser, age: e.target.value })
                  }
                />
              </Box>

              <Stack
                direction="row"
                sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}
              >
                <AccountCircle sx={{ color: "action.active", mr: 1 }} />
                <FormControl fullWidth variant="standard">
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Select
                    IconComponent={ExpandMoreIcon}
                    labelId="gender-label"
                    value={newUser.gender}
                    onChange={(e) =>
                      setNewUser({ ...newUser, gender: e.target.value })
                    }
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  label="Enter mobile"
                  variant="standard"
                  value={newUser.contactNumber}
                  onChange={(e) =>
                    setNewUser({ ...newUser, contactNumber: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  label="Enter address"
                  variant="standard"
                  value={newUser.address}
                  onChange={(e) =>
                    setNewUser({ ...newUser, address: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  label="Enter email"
                  variant="standard"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </Box>

              <Stack
                direction="row"
                sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}
              >
                <AccountCircle sx={{ color: "action.active", mr: 1 }} />
                <FormControl fullWidth variant="standard">
                  <InputLabel id="type-label">Type</InputLabel>
                  <Select
                    labelId="type-label"
                    value={newUser.type || "viewer"}
                    onChange={(e) =>
                      setNewUser({ ...newUser, type: e.target.value })
                    }
                  >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="editor">Editor</MenuItem>
                    <MenuItem value="viewer">Viewer</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  label="Enter username"
                  variant="standard"
                  value={newUser.username}
                  onChange={(e) =>
                    setNewUser({ ...newUser, username: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  label="Enter password"
                  variant="standard"
                  type="password"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
              </Box>
            </FormControl>

            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>

              <Button variant="contained" onClick={handleSaveUser}>
                {isEditing ? "Save changes" : "Add"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>

      <Box sx={{ height: 500, width: "100%", mb: 5 }}>
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row._id}
          loading={loading}
          pageSizeOptions={[10, 20, 50]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};

export default UsersPage;
