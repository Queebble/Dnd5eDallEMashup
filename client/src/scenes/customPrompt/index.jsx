import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  useTheme,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { useGenerateImage1024Mutation } from "../../state/api.js";
import diceImage from "../../assets/templogo.png";
import LinearProgress from "@mui/material/LinearProgress";

// Define a styled TextField component
const CssTextField = styled(TextField)({
  // Styles for various states of the TextField
  "& label.Mui-focused": {
    color: "#ffffff", // Label color when focused
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffffff", // Underline color when focused
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#ffffff", // Underline color when not focused
  },
  "& .MuiInputBase-input": {
    color: "#ffffff", // Input text color
    fontSize: "16px",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#ffffff", // Placeholder text color
  },
  "& .MuiInputLabel-root": {
    color: "#ffffff", // Label text color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ffffff", // Label text color when focused
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffffff", // Border color
    },
    "&:hover fieldset": {
      borderColor: "#ffffff", // Border color when hovered
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffffff", // Border color when focused
    },
  },
  width: "100%", // Full width
});

// Define the CustomPrompt component
const CustomPrompt = () => {
  const theme = useTheme();

  // Fetch the mutation function for generating images
  const [generateImage] = useGenerateImage1024Mutation();

  // State for the generated image URL
  const [imageURL, setImageURL] = useState(diceImage);

  // State to hold the user's typed prompt
  const [userPrompt, setUserPrompt] = useState("");

  // Track loading state
  const [loading, setLoading] = useState(false);

  // State for error message
  const [errorMessage, setErrorMessage] = useState("");

  // Function to open the generated image in a new tab
  const openImageInNewTab = (e) => {
    e.stopPropagation();
    window.open(imageURL, "_blank");
  };

  // Function to handle generating an image
  const handleGenerateImage = async () => {
    setLoading(true); // Start loading

    // Call the mutation to generate the image based on the user's prompt
    const result = await generateImage(userPrompt);
    const imageUrl = result?.data?.image.data[0].url;
    setImageURL(imageUrl ? imageUrl : imageURL);

    // Set an error message if there's an error
    setErrorMessage(result.error?.data.error);

    setLoading(false); // Stop loading (whether successful or not)
  };

  return (
    <Box m="1.5rem 1rem">
      {/* Main content */}
      <Box
        backgroundColor={theme.palette.primaryblack.default}
        sx={{
          display: "flex",
          p: "1.25rem 1rem",
          borderRadius: "0.55rem",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          minHeight: "90vh",
          margin: "auto",
        }}
      >
        <Typography variant="h1" color={theme.palette.white.default}>
          Custom Prompt Image Generator
        </Typography>

        {/* Input field for user's prompt */}
        <Box width="512px" p="20px 0px 20px 0px">
          <Box
            backgroundColor={theme.palette.buttonborder.default}
            borderRadius="4px"
            p="4px"
          >
            <CssTextField
              label="Enter a prompt"
              variant="standard"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
            />
          </Box>
        </Box>

        {/* Button to generate the image */}
        <Button
          variant="contained"
          onClick={handleGenerateImage}
          sx={{
            backgroundColor: theme.palette.primaryred.default,
            "&:hover": {
              backgroundColor: theme.palette.buttonborder.default,
            },
          }}
        >
          Generate Image
        </Button>

        {/* Display the generated image */}
        <Box pt="20px">
          {imageURL && (
            <img
              src={imageURL}
              onClick={openImageInNewTab}
              alt="Generated Image"
              style={{
                maxWidth: "900px",
                maxHeight: "900px",
                cursor: "pointer",
              }}
            />
          )}

          {/* Loading indicator */}
          <Box pt="20px">
            {loading && (
              <LinearProgress
                sx={{ backgroundColor: theme.palette.primaryred.default }}
              />
            )}
          </Box>
        </Box>
      </Box>

      {/* Snackbar for displaying error messages */}
      <Snackbar
        open={!!errorMessage} // Open Snackbar only when there's an error message
        autoHideDuration={6000}
        onClose={() => setErrorMessage("")} // Clear the error message when Snackbar is closed
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* Display error message in a Snackbar */}
        <Alert elevation={6} variant="filled" severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CustomPrompt;
