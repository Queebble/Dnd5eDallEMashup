import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import templogo from "../assets/templogo.png";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FireplaceIcon from "@mui/icons-material/Fireplace";
import PortraitSharpIcon from "@mui/icons-material/PortraitSharp";
import LibraryBooksSharpIcon from "@mui/icons-material/LibraryBooksSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Typography } from "@mui/material";

// Define the width of the sidebar/drawer
const drawerWidth = 240;

// Styling for the opened state of the sidebar/drawer
const openedMixin = (theme) => ({
  // Styles for the opened state
  width: drawerWidth,
  color: theme.palette.white.default,
  backgroundColor: theme.palette.primaryblack.default,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  borderRight: `1px solid ${theme.palette.buttonborder.default}`,
});

// Styling for the closed state of the drawer
const closedMixin = (theme) => ({
  // Styles for the closed state
  color: theme.palette.white.default,
  backgroundColor: theme.palette.primaryblack.default,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  borderRight: `1px solid ${theme.palette.buttonborder.default}`,
});

// Styling for the header of the drawer
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Styling for the custom drawer using Material-UI's styled function
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// Define the Sidebar component
const Sidebar = ({ isSidebarOpen }) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [active, setActive] = useState(
    pathname === "/" ? "home" : pathname.slice(1)
  );
  const navigate = useNavigate();

  // Helper function to handle navigation to a route
  const handleNavigation = (route) => {
    navigate(`/${route}`);
    setActive(route.toLowerCase());
  };

  return (
    <Box>
      <Drawer variant="permanent" open={isSidebarOpen}>
        {/* Drawer header */}
        <DrawerHeader>
          <Box
            component="img"
            alt="profile"
            src={templogo}
            height="48px"
            display="flex"
            justifyContent="center"
            sx={{ objectFit: "cover", margin: "auto" }}
          />
        </DrawerHeader>

        {/* Divider */}
        <Divider
          color={theme.palette.buttonborder.default}
          sx={{ margin: "0px 15px 0px 15px", borderRadius: "1px" }}
        />

        {/* List items for navigation */}
        <ListItem key={"Home"} disablePadding>
          <ListItemButton
            onClick={() => {
              handleNavigation(``);
            }}
            sx={{
              height: "3rem",
              "&:hover": {
                backgroundColor: theme.palette.buttonborder.default,
              },
            }}
          >
            <ListItemIcon
              sx={{
                ml: isSidebarOpen ? "0.2rem" : "auto",
                color: theme.palette.white.default,
              }}
            >
              <FireplaceIcon
                sx={{
                  fontSize: "2rem",
                }}
              />
            </ListItemIcon>

            <ListItemText
              primaryTypographyProps={{
                fontSize: "1.2rem",
                fontWeight: "100",
              }}
              primary={"Home"}
            />
            {active === "" && ( // Conditionally render the Box
              <Box
                sx={{
                  backgroundColor: theme.palette.primaryred.default,
                  width: "0.2rem",
                  height: "3rem",
                  borderRadius: "1px 0px 0px 1px",
                  position: "absolute",
                  marginLeft: "-16px",
                }}
              />
            )}
          </ListItemButton>
        </ListItem>

        {/* Divider */}
        <Divider
          color={theme.palette.buttonborder.default}
          sx={{ margin: "0px 15px 0px 15px", borderRadius: "1px" }}
        />

        {/* List item for "Portraits" */}
        <ListItem key={"Portraits"} disablePadding>
          <ListItemButton
            onClick={() => {
              handleNavigation(`portrait`);
            }}
            sx={{
              height: "3rem",
              "&:hover": {
                backgroundColor: theme.palette.buttonborder.default,
              },
            }}
          >
            <ListItemIcon
              sx={{
                ml: isSidebarOpen ? "0.2rem" : "auto",
                color: theme.palette.white.default,
              }}
            >
              <PortraitSharpIcon
                sx={{
                  fontSize: "2rem",
                }}
              />
            </ListItemIcon>

            <ListItemText
              primaryTypographyProps={{
                fontSize: "1.2rem",
                fontWeight: "100",
              }}
              primary={"Portraits"}
            />
            {active === "portrait" && ( // Conditionally render the Box
              <Box
                sx={{
                  backgroundColor: theme.palette.primaryred.default,
                  width: "0.2rem",
                  height: "3rem",
                  borderRadius: "1px 0px 0px 1px",
                  position: "absolute",
                  marginLeft: "-16px",
                }}
              />
            )}
          </ListItemButton>
        </ListItem>

        {/* Divider */}
        <Divider
          color={theme.palette.buttonborder.default}
          sx={{ margin: "0px 15px 0px 15px", borderRadius: "1px" }}
        />

        {/* List item for "Encyclopedia" */}
        <ListItem key={"Encyclopedia"} disablePadding>
          <ListItemButton
            onClick={() => {
              handleNavigation(`encyclopedia`);
            }}
            sx={{
              height: "3rem",
              "&:hover": {
                backgroundColor: theme.palette.buttonborder.default,
              },
            }}
          >
            <ListItemIcon
              sx={{
                ml: isSidebarOpen ? "0.2rem" : "auto",
                color: theme.palette.white.default,
              }}
            >
              <LibraryBooksSharpIcon
                sx={{
                  fontSize: "2rem",
                }}
              />
            </ListItemIcon>

            <ListItemText
              primaryTypographyProps={{
                fontSize: "1.2rem",
                fontWeight: "100",
              }}
              primary={"Encyclopedia"}
            />
            {active === "encyclopedia" && ( // Conditionally render the Box
              <Box
                sx={{
                  backgroundColor: theme.palette.primaryred.default,
                  width: "0.2rem",
                  height: "3rem",
                  borderRadius: "1px 0px 0px 1px",
                  position: "absolute",
                  marginLeft: "-16px",
                }}
              />
            )}
          </ListItemButton>
        </ListItem>

        {/* Divider */}
        <Divider
          color={theme.palette.buttonborder.default}
          sx={{ margin: "0px 15px 0px 15px", borderRadius: "1px" }}
        />

        {/* List item for "Custom Prompt" */}
        <ListItem key={"Custom Prompt"} disablePadding>
          <ListItemButton
            onClick={() => {
              handleNavigation(`customprompt`);
            }}
            sx={{
              height: "3rem",
              "&:hover": {
                backgroundColor: theme.palette.buttonborder.default,
              },
            }}
          >
            <ListItemIcon
              sx={{
                ml: isSidebarOpen ? "0.2rem" : "auto",
                color: theme.palette.white.default,
              }}
            >
              <SearchSharpIcon
                sx={{
                  fontSize: "2rem",
                }}
              />
            </ListItemIcon>

            <ListItemText
              primaryTypographyProps={{
                fontSize: "1.2rem",
                fontWeight: "100",
              }}
              primary={"Custom Prompt"}
            />
            {active === "customprompt" && ( // Conditionally render the Box
              <Box
                sx={{
                  backgroundColor: theme.palette.primaryred.default,
                  width: "0.2rem",
                  height: "3rem",
                  borderRadius: "1px 0px 0px 1px",
                  position: "absolute",
                  marginLeft: "-16px",
                }}
              />
            )}
          </ListItemButton>
        </ListItem>

        {/* Divider */}
        <Divider
          color={theme.palette.buttonborder.default}
          sx={{ margin: "0px 15px 0px 15px", borderRadius: "1px" }}
        />
      </Drawer>
    </Box>
  );
};

// Export the Sidebar component as the default export
export default Sidebar;
