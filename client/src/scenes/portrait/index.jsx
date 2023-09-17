// Import necessary components and libraries from Material-UI and React
import {
  Box,
  useTheme,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import PortraitMonster from "./tabs/portraitMonster";
import PortraitPlayer from "./tabs/portraitPlayer";

// Define the Dashboard component
const Portrait = () => {
  const theme = useTheme();

  // State variable to track the active tab
  const [value, setValue] = React.useState("0");

  // Function to handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // TabContext provides the context for the tabs and tab panels
    <TabContext value={value}>
      <Box
        sx={{
          bgcolor: theme.palette.primaryblack.default,
        }}
      >
        {/* TabList is the container for the tabs */}
        <TabList
          variant="scrollable"
          TabIndicatorProps={{
            sx: { backgroundColor: theme.palette.primaryred.default },
          }}
          onChange={handleChange}
        >
          {/* Individual tabs */}
          <Tab
            label="Player Portraits"
            value="0"
            sx={{
              typography: theme.typography.h3,
              fontWeight: value === "0" ? "500" : "",
              textTransform: "none",
              "&.Mui-selected": {
                color: theme.palette.white.default,
              },
              color: theme.palette.fadedtext.default,
            }}
          />
          <Tab
            label="Monster Portraits"
            value="1"
            sx={{
              typography: theme.typography.h3,
              fontWeight: value === "1" ? "500" : "",
              textTransform: "none",
              "&.Mui-selected": {
                color: theme.palette.white.default,
              },
              color: theme.palette.fadedtext.default,
            }}
          />
        </TabList>
      </Box>

      {/* TabPanel for "Player Portraits" tab */}
      <TabPanel value="0">
        {/* Slide animation for the tab content */}
        <Slide direction="right" in={value === "0"} timeout={400}>
          <Box m="1.5rem 1rem">
            {/* Render the "PortraitPlayer" component for "Player Portraits" */}
            <PortraitPlayer />
          </Box>
        </Slide>
      </TabPanel>

      {/* TabPanel for "Monster Portraits" tab */}
      <TabPanel value="1">
        {/* Slide animation for the tab content */}
        <Slide direction="right" in={value === "1"} timeout={400}>
          <Box m="1.5rem 1rem">
            {/* Render the "PortraitMonster" component for "Monster Portraits" */}
            <PortraitMonster />
          </Box>
        </Slide>
      </TabPanel>
    </TabContext>
  );
};

// Export the "Portrait" component as the default export
export default Portrait;
