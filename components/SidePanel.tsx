import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  Avatar,
  Tooltip,
} from "@mui/material";
import {
  Home,
  Dashboard,
  Person,
  Settings,
  Notifications,
  Email,
  Analytics,
  Folder,
  Event,
  Help,
  Logout,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { useNav } from "../context/NavigationProvider";
import { useAuth } from "../context/AuthContext";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  badge?: number;
}

const SidePanel: React.FC = () => {
  const router = useRouter();
  const { collapsed, toggleCollapse, activeRoute, setActiveRoute } = useNav();
  const { user, logout } = useAuth();

  // Mock navigation items - customize these for your app
  const navItems: NavItem[] = [
    { label: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
    { label: "Profile", icon: <Person />, path: "/profile" },
    { label: "Analytics", icon: <Analytics />, path: "/analytics" },
    { label: "Projects", icon: <Folder />, path: "/projects" },
    { label: "Calendar", icon: <Event />, path: "/calendar" },
    { label: "Messages", icon: <Email />, path: "/messages", badge: 3 },
    { label: "Settings", icon: <Settings />, path: "/settings" },
    { label: "Help", icon: <Help />, path: "/help" },
  ];

  const handleNavClick = (path: string) => {
    setActiveRoute(path);
    router.push(path);
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const drawerWidth = collapsed ? 64 : 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "1px solid",
          borderColor: "divider",
          transition: "width 0.2s ease-in-out",
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          p: 2,
          minHeight: 64,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        {!collapsed && (
          <Typography variant="h6" component="div" fontWeight="bold">
            App Name
          </Typography>
        )}
        <IconButton onClick={toggleCollapse} size="small">
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </Box>

      {/* User Profile */}
      {!collapsed && (
        <Box sx={{ p: 2, borderBottom: "1px solid", borderColor: "divider" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ width: 40, height: 40 }}>
              {user?.fullName?.charAt(0) || "U"}
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant="subtitle2" noWrap>
                {user?.fullName || "User Name"}
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap>
                {user?.email || "user@example.com"}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {/* Navigation Items */}
      <List sx={{ flex: 1, pt: 1 }}>
        {navItems.map((item) => {
          const isActive = activeRoute === item.path;
          return (
            <ListItem key={item.path} disablePadding>
              <Tooltip
                title={collapsed ? item.label : ""}
                placement="right"
                disableHoverListener={!collapsed}
              >
                <ListItemButton
                  onClick={() => handleNavClick(item.path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: collapsed ? "center" : "initial",
                    px: 2.5,
                    backgroundColor: isActive ? "primary.main" : "transparent",
                    color: isActive ? "primary.contrastText" : "inherit",
                    "&:hover": {
                      backgroundColor: isActive
                        ? "primary.dark"
                        : "action.hover",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: collapsed ? 0 : 3,
                      justifyContent: "center",
                      color: "inherit",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && (
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: "0.875rem",
                        fontWeight: isActive ? 600 : 400,
                      }}
                    />
                  )}
                  {!collapsed && item.badge && (
                    <Box
                      sx={{
                        backgroundColor: "error.main",
                        color: "error.contrastText",
                        borderRadius: "50%",
                        width: 20,
                        height: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                      }}
                    >
                      {item.badge}
                    </Box>
                  )}
                </ListItemButton>
              </Tooltip>
            </ListItem>
          );
        })}
      </List>

      {/* Logout */}
      <Divider />
      <List>
        <ListItem disablePadding>
          <Tooltip
            title={collapsed ? "Logout" : ""}
            placement="right"
            disableHoverListener={!collapsed}
          >
            <ListItemButton
              onClick={handleLogout}
              sx={{
                minHeight: 48,
                justifyContent: collapsed ? "center" : "initial",
                px: 2.5,
                color: "error.main",
                "&:hover": {
                  backgroundColor: "error.light",
                  color: "error.contrastText",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: collapsed ? 0 : 3,
                  justifyContent: "center",
                  color: "inherit",
                }}
              >
                <Logout />
              </ListItemIcon>
              {!collapsed && (
                <ListItemText
                  primary="Logout"
                  primaryTypographyProps={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                />
              )}
            </ListItemButton>
          </Tooltip>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidePanel;
