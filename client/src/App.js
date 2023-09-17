import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout";
import Home from "./scenes/home";
import Portrait from "./scenes/portrait";
import Encyclopedia from "./scenes/encyclopedia";
import CustomPrompt from "./scenes/customPrompt";

function App() {
  // Create a Material-UI theme based on theme settings
  const theme = useMemo(() => createTheme(themeSettings()));

  return (
    // Set up the application's routing using BrowserRouter
    <BrowserRouter>
      {/* Apply the created theme using ThemeProvider */}
      <ThemeProvider theme={theme}>
        {/* Apply baseline CSS to normalize styles across browsers */}
        <CssBaseline />

        {/* Define routes using React Router */}
        <Routes>
          {/* Layout component serves as a common layout for all routes */}
          <Route element={<Layout />}>
            {/* Set a default route to redirect to "/home" */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Define routes for different scenes/components */}
            <Route path="/home" element={<Home />} />
            <Route path="/portrait" element={<Portrait />} />
            <Route path="/encyclopedia" element={<Encyclopedia />} />
            <Route path="/customprompt" element={<CustomPrompt />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

// Export the main App component
export default App;
