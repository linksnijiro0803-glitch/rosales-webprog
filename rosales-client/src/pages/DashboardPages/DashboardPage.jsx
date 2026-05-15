import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VisibilityIcon from "@mui/icons-material/Visibility";

const summaryCards = [
  {
    label: "Total Users",
    value: "1,248",
    change: "+12%",
    icon: <GroupIcon />,
    color: "#1976d2",
  },
  {
    label: "Published Articles",
    value: "86",
    change: "+8%",
    icon: <ArticleIcon />,
    color: "#2e7d32",
  },
  {
    label: "Monthly Views",
    value: "24.5K",
    change: "+18%",
    icon: <VisibilityIcon />,
    color: "#ed6c02",
  },
  {
    label: "Growth Rate",
    value: "72%",
    change: "+5%",
    icon: <TrendingUpIcon />,
    color: "#9c27b0",
  },
];

const activities = [
  {
    title: "New user account created",
    details: "Mika Santos joined as Editor",
    time: "10 mins ago",
  },
  {
    title: "Article published",
    details: "Technology Trends was added to the article list",
    time: "1 hour ago",
  },
  {
    title: "Report generated",
    details: "Monthly engagement report is ready",
    time: "Today",
  },
];

const palette = {
  dark: "#162127",
  tan: "#CF9D7B",
  brown: "#724B39",
  text: "#3A3534",
};

const pageSx = {
  minHeight: "calc(100vh - 88px)",
  border: `2px solid ${palette.brown}`,
  borderRadius: 2,
  bgcolor: palette.dark,
  p: { xs: 2, md: 3 },
};

const cardSx = {
  height: "100%",
  border: `2px solid ${palette.brown}`,
  borderRadius: 2,
  bgcolor: palette.tan,
  color: palette.dark,
  boxShadow: "none",
};

function DashboardPage() {
  return (
    <Box sx={pageSx}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography variant="h4" fontWeight={700} color={palette.tan}>
            Overview
          </Typography>
          <Typography sx={{ color: palette.tan }}>
            Summary of users, articles, views, and recent activity.
          </Typography>
        </Box>
        <Chip
          label="Laboratory Activity Dashboard"
          sx={{
            border: `1px solid ${palette.tan}`,
            bgcolor: palette.brown,
            color: "white",
            fontWeight: 700,
          }}
        />
      </Stack>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {summaryCards.map((card) => (
          <Grid item xs={12} sm={6} lg={3} key={card.label}>
            <Card sx={cardSx}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between">
                  <Avatar sx={{ bgcolor: palette.dark, color: palette.tan }}>
                    {card.icon}
                  </Avatar>
                  <Chip
                    label={card.change}
                    size="small"
                    sx={{
                      bgcolor: card.color,
                      color: "white",
                      fontWeight: 700,
                    }}
                  />
                </Stack>
                <Typography sx={{ mt: 2, color: palette.brown, fontWeight: 700 }}>
                  {card.label}
                </Typography>
                <Typography variant="h4" fontWeight={700}>
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Card sx={cardSx}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Project Progress
              </Typography>

              <Stack spacing={3} sx={{ mt: 3 }}>
                <Box>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Dashboard UI</Typography>
                    <Typography>90%</Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={90}
                    sx={{ bgcolor: "#e6bfa3", "& .MuiLinearProgress-bar": { bgcolor: palette.dark } }}
                  />
                </Box>
                <Box>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>Reports Visualization</Typography>
                    <Typography>82%</Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={82}
                    sx={{ bgcolor: "#e6bfa3", "& .MuiLinearProgress-bar": { bgcolor: palette.brown } }}
                  />
                </Box>
                <Box>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography>User Management</Typography>
                    <Typography>76%</Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={76}
                    sx={{ bgcolor: "#e6bfa3", "& .MuiLinearProgress-bar": { bgcolor: "#3A3534" } }}
                  />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card sx={cardSx}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Recent Activity
              </Typography>
              <List>
                {activities.map((activity) => (
                  <ListItem key={activity.title} alignItems="flex-start" disableGutters>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: palette.dark, color: palette.tan }}>
                        {activity.title.charAt(0)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={activity.title}
                      secondary={`${activity.details} - ${activity.time}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardPage;
