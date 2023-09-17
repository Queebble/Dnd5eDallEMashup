import { Box, useTheme } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import Slide from "@mui/material/Slide";
import MonsterE from "./tabs/monsterE";
import EquipmentE from "./tabs/equipmentE";

// Define the Encyclopedia component
const Encyclopedia = () => {
  // Access the theme for styling
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
            label="Monster Encyclopedia"
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
            label="Equipment Encyclopedia"
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

      {/* TabPanel for "Monster Encyclopedia" tab */}
      <TabPanel value="0">
        {/* Slide animation for the tab content */}
        <Slide direction="right" in={value === "0"} timeout={400}>
          <Box m="1.5rem 1rem">
            {/* Include the MonsterE component */}
            <MonsterE />
          </Box>
        </Slide>
      </TabPanel>

      {/* TabPanel for "Equipment Encyclopedia" tab */}
      <TabPanel value="1">
        {/* Slide animation for the tab content */}
        <Slide direction="right" in={value === "1"} timeout={400}>
          <Box m="1.5rem 1rem">
            {/* Include the EquipmentE component */}
            <EquipmentE />
          </Box>
        </Slide>
      </TabPanel>
    </TabContext>
  );
};

export default Encyclopedia;
