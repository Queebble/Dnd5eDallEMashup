import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

// Define the Layout component
const Layout = () => {
  // State to control the visibility of the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Render the Layout component
  return (
    <Box display={"flex"} width="100%" height="100%">
      {/* Sidebar component with conditional visibility */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main content area */}
      <Box flexGrow={1}>
        {/* Render the Navbar component */}
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Outlet for rendering child routes */}
        <Outlet />
      </Box>
    </Box>
  );
};

// Export the Layout component as the default export
export default Layout;
