import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  useTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Button,
  TextField,
  LinearProgress,
  Snackbar,
  Alert,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import {
  useGetMonstersQuery,
  useGenerateImage512Mutation,
} from "../../../state/api";
import diceImage from "../../../assets/templogo.png";
import Divider from "@mui/material/Divider";

// Define a list of adjectives and art styles
const adjectives = [
  { label: "Portrait", checked: false },
  { label: "Dungeons & Dragons", checked: false },
  { label: "Ethereal", checked: false },
  { label: "Whimsical", checked: false },
  { label: "Magical", checked: false },
  { label: "Surreal", checked: false },
  { label: "Arcane", checked: false },
  { label: "Beautiful", checked: false },
  { label: "Pure", checked: false },
  { label: "Herioc", checked: false },
  { label: "Dark", checked: false },
  { label: "Wild", checked: false },
];

const artStyles = [
  { label: "Eldritch", checked: false },
  { label: "Fantasy", checked: false },
  { label: "Gothic", checked: false },
  { label: "Pop art", checked: false },
  { label: "Impressionism", checked: false },
  { label: "Baroque", checked: false },
  { label: "Japanese", checked: false },
  { label: "Steam Punk", checked: false },
  { label: "Naturalistic", checked: false },
  { label: "Pixel Art", checked: false },
];

// Define a styled TextField component
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ffffff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffffff",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#ffffff",
  },
  "& .MuiInputBase-input": {
    color: "#ffffff",
    fontSize: "16px",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#ffffff",
  },
  "& .MuiInputLabel-root": {
    color: "#ffffff",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ffffff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffffff",
    },
    "&:hover fieldset": {
      borderColor: "#ffffff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffffff",
    },
  },
  width: "100%",
});

const PortraitMonster = () => {
  const theme = useTheme();

  // Query to fetch monster data
  const monsterDataQuery = useGetMonstersQuery();

  // State variables
  const [selectedMonster, setSelectedMonster] = useState("");
  const [wordStates, setWordStates] = useState(adjectives);
  const [artStates, setArtStates] = useState(artStyles);

  // Mutation to generate an image
  const [generateImage] = useGenerateImage512Mutation();

  // State for the generated image URL, user prompt, loading state, and error message
  const [imageURL, setImageURL] = useState(diceImage);
  const [userPrompt, setUserPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle checkbox state changes for adjectives
  const handleWordCheckboxChange = (index) => {
    const updatedWordStates = [...wordStates];
    updatedWordStates[index].checked = !updatedWordStates[index].checked;
    setWordStates(updatedWordStates);
  };

  // Function to handle checkbox state changes for art styles
  const handleArtCheckboxChange = (index) => {
    const updatedArtStates = [...artStates];
    updatedArtStates[index].checked = !updatedArtStates[index].checked;
    setArtStates(updatedArtStates);
  };

  // Function to open the generated image in a new tab
  const openImageInNewTab = (e) => {
    e.stopPropagation();
    window.open(imageURL, "_blank");
  };

  // Function to update the user prompt based on selected values and checkboxes
  const updatePrompt = () => {
    const selectedValues = [selectedMonster].filter((value) => value);
    // Create a prompt array that includes selected values and checked words
    const promptArray = [...selectedValues];
    wordStates.forEach((word) => {
      if (word.checked) {
        promptArray.push(word.label);
      }
    });
    artStyles.forEach((artStyle) => {
      if (artStyle.checked) {
        promptArray.push(artStyle.label);
      }
    });

    setUserPrompt(promptArray.join(", "));
  };

  useEffect(() => {
    // Update the user prompt whenever selectedMonster, wordStates, or artStates change
    updatePrompt();
  }, [selectedMonster, wordStates, artStates]);

  // Function to handle the image generation button click
  const handleGenerateImage = async () => {
    setLoading(true); // Start loading
    const result = await generateImage(userPrompt);
    const imageUrl = result?.data?.image.data[0].url;
    setImageURL(imageUrl ? imageUrl : imageURL);
    setErrorMessage(result.error?.data.error);
    setLoading(false); // Stop loading (whether successful or not)
  };

  return (
    <Box display="flex" height="83vh" gap="20px">
      <Box
        display="block"
        p="1.25rem 1rem"
        backgroundColor={theme.palette.primaryblack.default}
        borderRadius="0.55rem"
        sx={{ overflowY: "scroll" }}
      >
        <Typography variant="h2" textAlign="center">
          Monster Portrait Creator
        </Typography>

        {monsterDataQuery.data ? (
          <Box p="15px 0px 10px 0px">
            {/* Left-side panel for monster selection and adjectives */}
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Select a Monster</InputLabel>
              <Select
                value={selectedMonster}
                onChange={(event) => setSelectedMonster(event.target.value)}
                label="Select a Monster"
                sx={{
                  color: "white",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.white.default,
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.white.default,
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.white.default,
                  },
                  ".MuiSvgIcon-root ": {
                    fill: "white !important",
                  },
                }}
                inputProps={{
                  MenuProps: {
                    MenuListProps: {
                      sx: {
                        backgroundColor: theme.palette.background.default,
                      },
                    },
                  },
                }}
              >
                {monsterDataQuery.data.monsters.map((monsterItem) => (
                  <MenuItem key={monsterItem.index} value={monsterItem.index}>
                    {monsterItem.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ) : (
          <p>Loading Monsters...</p>
        )}

        {/* Checkboxes for adjectives */}
        <Box pt="15px" m="0px 15px 0px 15px">
          <Typography variant="h3" textAlign="center">
            Other Adjectives
          </Typography>
          <Divider
            color={theme.palette.buttonborder.default}
            sx={{ margin: "5px 15px 0px 15px", borderRadius: "1px" }}
          />
          {wordStates.map((word, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={word.checked}
                  onChange={() => handleWordCheckboxChange(index)}
                  sx={{
                    color: `${theme.palette.primaryred.default} !important`,
                  }}
                />
              }
              label={word.label}
            />
          ))}
        </Box>

        {/* Checkboxes for art styles */}
        <Box pt="15px" m="0px 15px 0px 15px">
          <Typography variant="h3" textAlign="center">
            Art Styles
          </Typography>
          <Divider
            color={theme.palette.buttonborder.default}
            sx={{ margin: "5px 15px 0px 15px", borderRadius: "1px" }}
          />
          {artStates.map((artStyle, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={artStyle.checked}
                  onChange={() => handleArtCheckboxChange(index)}
                  sx={{
                    color: `${theme.palette.primaryred.default} !important`,
                  }}
                />
              }
              label={artStyle.label}
            />
          ))}
        </Box>
      </Box>

      {/* Right-side panel for image generation */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="1.25rem 1rem"
        flex="1 1 100%"
        backgroundColor={theme.palette.primaryblack.default}
        borderRadius="0.55rem"
        sx={{ overflowY: "scroll" }}
      >
        <Typography
          textAlign="center"
          variant="h1"
          color={theme.palette.white.default}
        >
          Portrait Generator
        </Typography>

        {/* Input field for editing the user's prompt */}
        <Box width="512px" p="20px 0px 20px 0px">
          <Box
            backgroundColor={theme.palette.buttonborder.default}
            borderRadius="4px"
            p="4px"
          >
            <CssTextField
              label="Edit Prompt"
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
                maxWidth: "512px",
                maxHeight: "512px",
                cursor: "pointer",
              }}
            />
          )}
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
        <Alert elevation={6} variant="filled" severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PortraitMonster;
