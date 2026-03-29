import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Button,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import {
  TrendingUp,
  People,
  Folder,
  Assessment,
  Add,
} from "@mui/icons-material";
import SidePanel from "../components/SidePanel";
import { useAuth } from "../context/AuthContext";
import { useNav } from "../context/NavigationProvider";
import { useModal } from "../context/ModalContext";
import { MODAL_TYPES } from "../components/GlobalModal";

export default function Dashboard() {
  const { user, isAuthenticated, isAuthReady } = useAuth();
  const { collapsed } = useNav();
  const { showModal } = useModal();

  // Mock data for demonstration
  const mockStats = {
    totalUsers: 1234,
    totalProjects: 89,
    activeUsers: 567,
    revenue: 45678,
  };

  const mockRecentUsers = [
    { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "User" },
  ];

  const mockRecentProjects = [
    { id: "1", name: "Project Alpha", status: "active", progress: 75 },
    { id: "2", name: "Project Beta", status: "pending", progress: 30 },
    { id: "3", name: "Project Gamma", status: "completed", progress: 100 },
  ];

  const handleCreateProject = () => {
    showModal(MODAL_TYPES.GENERIC_MODAL, {
      title: "Create New Project",
      children: (
        <Typography>
          This is where you would put your project creation form. You can use
          the HFComponents here for a complete form experience.
        </Typography>
      ),
      actions: (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained">Create Project</Button>
        </Box>
      ),
    });
  };

  if (!isAuthReady) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h5">
          Please log in to access the dashboard
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <SidePanel />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: collapsed ? "64px" : "240px",
          transition: "margin-left 0.2s ease-in-out",
          bgcolor: "background.default",
        }}
      >
        <Container maxWidth="xl" sx={{ py: 4 }}>
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome back, {user?.fullName || "User"}!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Here's what's happening with your projects today.
            </Typography>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography color="text.secondary" gutterBottom>
                        Total Users
                      </Typography>
                      <Typography variant="h4" component="div">
                        {mockStats.totalUsers}
                      </Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      <People />
                    </Avatar>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography color="text.secondary" gutterBottom>
                        Total Projects
                      </Typography>
                      <Typography variant="h4" component="div">
                        {mockStats.totalProjects}
                      </Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: "secondary.main" }}>
                      <Folder />
                    </Avatar>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography color="text.secondary" gutterBottom>
                        Active Users
                      </Typography>
                      <Typography variant="h4" component="div">
                        {mockStats.activeUsers}
                      </Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: "success.main" }}>
                      <TrendingUp />
                    </Avatar>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography color="text.secondary" gutterBottom>
                        Revenue
                      </Typography>
                      <Typography variant="h4" component="div">
                        ${mockStats.revenue.toLocaleString()}
                      </Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: "warning.main" }}>
                      <Assessment />
                    </Avatar>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Content Grid */}
          <Grid container spacing={3}>
            {/* Recent Users */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography variant="h6">Recent Users</Typography>
                  <Button size="small" startIcon={<Add />}>
                    Add User
                  </Button>
                </Box>
                <List>
                  {mockRecentUsers.map((user) => (
                    <ListItem key={user.id} divider>
                      <ListItemAvatar>
                        <Avatar>{user.name.charAt(0)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={user.name}
                        secondary={user.email}
                      />
                      <Chip label={user.role} size="small" color="primary" />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Recent Projects */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography variant="h6">Recent Projects</Typography>
                  <Button
                    size="small"
                    startIcon={<Add />}
                    onClick={handleCreateProject}
                  >
                    New Project
                  </Button>
                </Box>
                <List>
                  {mockRecentProjects.map((project) => (
                    <ListItem key={project.id} divider>
                      <ListItemText
                        primary={project.name}
                        secondary={`${project.progress}% complete`}
                      />
                      <Chip
                        label={project.status}
                        size="small"
                        color={
                          project.status === "completed"
                            ? "success"
                            : project.status === "active"
                              ? "primary"
                              : "warning"
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>

          {/* API Status Demo */}
          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              API Integration Status
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              This dashboard demonstrates the integration with axios and
              interceptors. The data above is mock data, but the API calls are
              ready to work with your backend.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Chip label="Axios Ready" color="success" size="small" />
              <Chip label="Interceptors" color="primary" size="small" />
              <Chip label="Authentication" color="info" size="small" />
              <Chip label="Modal System" color="secondary" size="small" />
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
