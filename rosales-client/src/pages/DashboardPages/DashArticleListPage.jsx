import { useEffect, useState } from "react";
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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArticleIcon from "@mui/icons-material/Article";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  createArticle,
  fetchArticles,
  updateArticle,
} from "../../services/ArticleService";

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

const defaultArticle = {
  title: "",
  slug: "",
  paragraph: "",
  preview: "",
  status: "published",
  isActive: true,
};

const getArticlesFromResponse = (data) =>
  Array.isArray(data) ? data : data.articles || [];

const createSlug = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const DashArticleListPage = () => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editArticleId, setEditArticleId] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newArticle, setNewArticle] = useState(defaultArticle);

  const loadArticles = async () => {
    try {
      setLoading(true);
      const { data } = await fetchArticles();
      setArticles(getArticlesFromResponse(data));
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadInitialArticles = async () => {
      try {
        const { data } = await fetchArticles();

        if (isMounted) {
          setArticles(getArticlesFromResponse(data));
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadInitialArticles();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleOpen = () => {
    setIsEditing(false);
    setEditArticleId(null);
    setNewArticle(defaultArticle);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setEditArticleId(null);
    setNewArticle(defaultArticle);
  };

  const handleEdit = (id) => {
    const articleToEdit = articles.find((article) => article._id === id);

    if (articleToEdit) {
      setNewArticle({
        ...defaultArticle,
        ...articleToEdit,
      });
      setEditArticleId(id);
      setIsEditing(true);
      setOpen(true);
    }
  };

  const handleTitleChange = (value) => {
    setNewArticle((prevArticle) => ({
      ...prevArticle,
      title: value,
      slug: isEditing ? prevArticle.slug : createSlug(value),
    }));
  };

  const handleSaveArticle = async () => {
    try {
      const articleData = {
        ...newArticle,
        slug: newArticle.slug || createSlug(newArticle.title),
      };

      if (isEditing) {
        await updateArticle(editArticleId, articleData);
      } else {
        await createArticle(articleData);
      }

      await loadArticles();
      handleClose();
    } catch (error) {
      console.error("Error saving article:", error.response?.data || error.message);
    }
  };

  const handleToggleActive = async (id, isActive) => {
    try {
      await updateArticle(id, {
        isActive: !isActive,
        status: isActive ? "disabled" : "published",
      });
      await loadArticles();
    } catch (error) {
      console.error("Error toggling article status:", error.response?.data || error.message);
    }
  };

  const columns = [
    { field: "title", headerName: "Title", flex: 1 },
    { field: "slug", headerName: "Slug", flex: 1 },
    { field: "preview", headerName: "Preview", flex: 1 },
    { field: "status", headerName: "Status", flex: 1, sortable: true },
    {
      field: "paragraph",
      headerName: "Content",
      flex: 1,
      valueGetter: (params) => params.row?.paragraph?.substring(0, 80) || "",
    },
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
          Articles
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
          Add Article
        </Button>
      </Stack>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="article-modal"
        aria-describedby="article-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="article-modal-title" variant="h6" component="h2">
            {isEditing ? "Edit Article" : "Add Article"}
          </Typography>

          <Stack
            id="article-modal-description"
            direction="column"
            spacing={3}
            sx={{ mt: 2 }}
          >
            <FormControl fullWidth variant="standard">
              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <ArticleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  label="Enter title"
                  variant="standard"
                  value={newArticle.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <ArticleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  label="Enter slug"
                  variant="standard"
                  value={newArticle.slug}
                  onChange={(e) =>
                    setNewArticle({ ...newArticle, slug: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <ArticleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  label="Enter preview"
                  variant="standard"
                  value={newArticle.preview}
                  onChange={(e) =>
                    setNewArticle({ ...newArticle, preview: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
                <ArticleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  label="Enter paragraph/content"
                  variant="standard"
                  value={newArticle.paragraph}
                  onChange={(e) =>
                    setNewArticle({ ...newArticle, paragraph: e.target.value })
                  }
                />
              </Box>

              <Stack
                direction="row"
                sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}
              >
                <ArticleIcon sx={{ color: "action.active", mr: 1 }} />
                <FormControl fullWidth variant="standard">
                  <InputLabel id="status-label">Status</InputLabel>
                  <Select
                    IconComponent={ExpandMoreIcon}
                    labelId="status-label"
                    value={newArticle.status}
                    onChange={(e) =>
                      setNewArticle({ ...newArticle, status: e.target.value })
                    }
                  >
                    <MenuItem value="published">Published</MenuItem>
                    <MenuItem value="draft">Draft</MenuItem>
                    <MenuItem value="disabled">Disabled</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </FormControl>

            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>

              <Button variant="contained" onClick={handleSaveArticle}>
                {isEditing ? "Save changes" : "Add"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>

      <Box sx={{ height: 500, width: "100%", mb: 5 }}>
        <DataGrid
          rows={articles}
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

export default DashArticleListPage;
