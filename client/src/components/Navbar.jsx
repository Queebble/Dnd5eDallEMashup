import React from "react";
import { useLocation } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { IconButton, Toolbar, Typography, Box } from "@mui/material";

// Styling for the AppBar using Material-UI's styled function
const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
  // Styles for the AppBar
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["240", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(["240", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

// Define the Navbar component - this is the bar on the top of the page - exists on every view
const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();
  const { pathname } = useLocation();

  return (
    <AppBar
      sx={{
        position: "sticky",
        boxShadow: "none",
        background: theme.palette.primaryblack.default,
        transition: "width 0.1s ease", // Add a transition effect
        borderBottom: "1px solid",
        borderColor: theme.palette.buttonborder.default,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        {/* Left side of navbar */}
        <FlexBetween>
          <IconButton
            color={theme.palette.textoffblack.default}
            aria-label="open drawer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            edge="start"
            sx={{
              marginRight: 1,
            }}
          >
            <MenuIcon sx={{ color: theme.palette.white.default }} />
          </IconButton>
          <Typography
            variant="h3"
            fontWeight="600"
            textTransform="capitalize"
            color={theme.palette.white.default}
          >
            {pathname.substring(1)}
          </Typography>
        </FlexBetween>

        {/* Right side of navbar*/}
        <FlexBetween gap="1.5rem">
          <Typography
            style={{ whiteSpace: "normal" }}
            padding="10px"
            variant="h4"
            color={theme.palette.white.default}
            align="center"
          >
            Dnd5e & DALL·E 2 Mashup - Developed by Stephen Fekete N10214747
          </Typography>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

// Export the Navbar component as the default export
export default Navbar;
