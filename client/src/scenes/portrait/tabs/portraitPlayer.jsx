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
  useGetClassesQuery,
  useGetAlignmentsQuery,
  useGetRacesQuery,
  useGetSubRacesQuery,
  useGenerateImage512Mutation,
} from "../../../state/api";
import diceImage from "../../../assets/templogo.png";
import Divider from "@mui/material/Divider";

// Define a list of adjectives and art styles with initial checked state
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

// Create a styled TextField component using MUI's styled utility
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

// Define the PortraitPlayer component
const PortraitPlayer = () => {
  const theme = useTheme();

  // Queries to fetch class, alignment, race, and subrace data
  const classDataQuery = useGetClassesQuery();
  const alignmentDataQuery = useGetAlignmentsQuery();
  const raceDataQuery = useGetRacesQuery();
  const subRaceDataQuery = useGetSubRacesQuery();

  // State variables to manage selected attributes and other UI states
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedAlignment, setSelectedAlignment] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedRace, setSelectedRace] = useState("");
  const [selectedSubRace, setSelectedSubRace] = useState("");
  const [wordStates, setWordStates] = useState(adjectives);
  const [artStates, setArtStates] = useState(artStyles);

  // Mutation to generate the character portrait
  const [generateImage] = useGenerateImage512Mutation();

  // State variable to store the generated image URL
  const [imageURL, setImageURL] = useState(diceImage);

  // State variable to store the user's input prompt
  const [userPrompt, setUserPrompt] = useState("");

  // State variable to manage loading state
  const [loading, setLoading] = useState(false);

  // State variable to display error messages
  const [errorMessage, setErrorMessage] = useState("");

  // Define the handleWordCheckboxChange function
  const handleWordCheckboxChange = (index) => {
    const updatedWordStates = [...wordStates];
    updatedWordStates[index].checked = !updatedWordStates[index].checked;
    setWordStates(updatedWordStates);
  };

  // Function to handle changes in art style checkbox states
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

  // Function to clear selected fields
  const clearSelectFields = () => {
    setSelectedClass("");
    setSelectedAlignment("");
    setSelectedRace("");
    setSelectedSubRace("");
    setSelectedGender("");
  };

  // Function to dynamically update the user's input prompt
  const updatePrompt = () => {
    const selectedValues = [
      selectedClass,
      selectedAlignment,
      selectedRace,
      selectedSubRace,
      selectedGender,
    ].filter((value) => value);

    // Create a prompt array that includes selected values and checked words
    const promptArray = [...selectedValues];
    wordStates.forEach((word) => {
      if (word.checked) {
        promptArray.push(word.label);
      }
    });
    artStates.forEach((artStyle) => {
      if (artStyle.checked) {
        promptArray.push(artStyle.label);
      }
    });

    setUserPrompt(promptArray.join(", "));
  };

  // Update the prompt whenever selected attributes or checkboxes change
  useEffect(() => {
    updatePrompt();
  }, [
    selectedClass,
    selectedAlignment,
    selectedGender,
    selectedRace,
    selectedSubRace,
    wordStates,
    artStates,
  ]);

  // Function to handle image generation
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
      {/* Left-side panel for attribute selection */}
      <Box
        display="block"
        p="1.25rem 1rem"
        backgroundColor={theme.palette.primaryblack.default}
        borderRadius="0.55rem"
        sx={{ overflowY: "scroll" }}
      >
        <Typography variant="h2" textAlign="center">
          Character Portrait Creator
        </Typography>

        {/* Select class dropdown */}
        {classDataQuery.data ? (
          <Box p="15px 0px 10px 0px">
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Select a Class</InputLabel>
              <Select
                value={selectedClass}
                onChange={(event) => setSelectedClass(event.target.value)}
                label="Select a Class"
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
                {classDataQuery.data.classes.map((classItem) => (
                  <MenuItem key={classItem.index} value={classItem.index}>
                    {classItem.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ) : (
          <p>Loading Classes...</p>
        )}

        {/* Select alignment dropdown */}
        {alignmentDataQuery.data ? (
          <Box p="10px 0px 10px 0px" display="flex">
            <FormControl
              variant="outlined"
              fullWidth
              style={{ flex: 1, paddingRight: "5px" }}
            >
              <InputLabel>Select an Alignment</InputLabel>
              <Select
                value={selectedAlignment}
                onChange={(event) => setSelectedAlignment(event.target.value)}
                label="Select an Alignment"
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
                {alignmentDataQuery.data.alignments.map((alignmentItem) => (
                  <MenuItem
                    key={alignmentItem.index}
                    value={alignmentItem.index}
                  >
                    {alignmentItem.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Select gender dropdown */}
            <FormControl
              variant="outlined"
              fullWidth
              style={{ flex: 1, paddingLeft: "5px" }}
            >
              <InputLabel>Select Gender</InputLabel>
              <Select
                value={selectedGender}
                onChange={(event) => setSelectedGender(event.target.value)}
                label="Select Gender"
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
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
          </Box>
        ) : (
          <p>Loading Alignments...</p>
        )}

        {/* Select race and subrace dropdowns */}
        {raceDataQuery.data && subRaceDataQuery.data ? (
          <Box p="10px 0px 10px 0px" display="flex">
            <FormControl
              variant="outlined"
              fullWidth
              style={{ flex: 1, paddingRight: "5px" }}
            >
              <InputLabel>Select a Race</InputLabel>
              <Select
                value={selectedRace}
                onChange={(event) => setSelectedRace(event.target.value)}
                label="Select a Race"
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
                {raceDataQuery.data.races.map((raceItem) => (
                  <MenuItem key={raceItem.index} value={raceItem.index}>
                    {raceItem.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              fullWidth
              style={{ flex: 1, paddingLeft: "5px" }}
            >
              <InputLabel>Select a Subrace - Optional</InputLabel>
              <Select
                value={selectedSubRace}
                onChange={(event) => setSelectedSubRace(event.target.value)}
                label="Select a Subrace - Optional"
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
                {subRaceDataQuery.data.subraces.map((subRaceItem) => (
                  <MenuItem key={subRaceItem.index} value={subRaceItem.index}>
                    {subRaceItem.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ) : (
          <p>Loading Races...</p>
        )}

        {/* Clear button to reset selected fields */}
        <Box mt="5px">
          <Button
            variant="outlined"
            onClick={clearSelectFields}
            sx={{
              color: theme.palette.white.default,
              borderColor: theme.palette.primaryred.default,
              "&:hover": {
                backgroundColor: theme.palette.primaryred.default,
                color: "white",
              },
            }}
          >
            Clear
          </Button>
        </Box>

        {/* Checkboxes for word adjectives */}
        <Box m="0px 15px 0px 15px">
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

        {/* Display the generated image */}
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

export default PortraitPlayer;
