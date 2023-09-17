import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  useTheme,
  LinearProgress,
  Button,
  styled,
  Snackbar,
  Alert,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  useGetMonstersQuery,
  useGetMonsterDataQuery,
  useGenerateImage512Mutation,
} from "../../../state/api";
import diceImage from "../../../assets/templogo.png";

// Define the MonsterE component
const MonsterE = () => {
  const theme = useTheme();

  // Fetch monsters data and loading status
  const { data, isLoading } = useGetMonstersQuery();

  // State for the selected monster's name
  const [name, setName] = useState(null);

  // Fetch monster data for the selected monster
  const { data: monsterData, isLoading: monsterIsLoading } =
    useGetMonsterDataQuery({ name });

  // Mutation to generate a monster image
  const [generateImage] = useGenerateImage512Mutation();

  // State for loading state of image generation
  const [loading, setLoading] = useState(false);

  // State for error message
  const [errorMessage, setErrorMessage] = useState("");

  // State for the URL of the generated image
  const [imageURL, setImageURL] = useState(diceImage);

  // Function to handle generating a monster image
  const handleGenerateImage = async () => {
    setLoading(true); // Start loading

    // Call the mutation to generate the image
    const result = await generateImage(name + " Fantasy");
    const imageUrl = result?.data?.image.data[0].url;
    setImageURL(imageUrl ? imageUrl : imageURL);
    setErrorMessage(result.error?.data.error);

    setLoading(false); // Stop loading (whether successful or not)
  };

  // Function to handle selecting a row in the monster list
  const handleRowSelection = (selection) => {
    setName(selection);
  };

  // Function to open the generated image in a new tab
  const openImageInNewTab = (e) => {
    e.stopPropagation();
    window.open(imageURL, "_blank");
  };

  useEffect(() => {
    // Reset the imageURL to diceImage when the name changes
    setImageURL(diceImage);
  }, [name]);

  // Styled component for custom styling of Box
  const CssBox = styled(Box)({
    display: "block",
    textAlign: "left",
    position: "relative",
    lineHeight: "2",
    backgroundColor: theme.palette.background.default,
    padding: "5px",
    margin: "10px",
    borderRadius: "0.55rem",
  });

  // Configuration for the monster columns in the data grid
  const monsterColumns = [
    {
      field: "name",
      headerName: "Monsters",
      flex: 1,
    },
  ];

  return (
    <Box display="flex" height="83vh" gap="20px">
      {/* Left side: Monster List */}
      <Box
        minWidth="400px"
        display="block"
        backgroundColor={theme.palette.primaryblack.default}
        borderRadius="0.55rem"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            borderBottom: "none",
            fontSize: "1rem",
          },
          // Custom styling for buttons in the data grid
          "& .MuiButtonBase-root": {
            margin: "0px 4px 0px 4px",
            backgroundColor: `${theme.palette.buttonborder.default} !important`,
            color: "white !important",
          },
          // Custom styling for a specific CSS class
          "& .css-19rwt2y-MuiPaper-root": {
            backgroundColor: `red !important`,
            color: "white !important",
          },
          // Custom styling for cell background and text color
          "& .MuiDataGrid-cell": {
            borderColor: theme.palette.buttonborder.default,
            backgroundColor: theme.palette.primaryblack.default,
            color: theme.palette.text.default,
          },
          // Custom styling for the data grid toolbar container
          "& .MuiDataGrid-toolbarContainer": {
            backgroundColor: theme.palette.primaryblack.default,
            borderRadius: "0.55rem 0.55rem 0px 0px",
            boxShadow:
              "0px 3.890000104904175px 18.469999313354492px 0px rgba(0, 99, 231, 0.06)",
          },
          // Custom styling for column headers
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.secondaryred.default,
            color: theme.palette.text.default,
            borderBottom: `1px solid ${theme.palette.buttonborder.default} !important`,
            borderRadius: "0.55rem 0.55rem 0 0",
          },
          // Custom styling for the virtual scroller
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.buttonborder.default,
            overflowX: "hidden",
          },
          // Custom styling for the virtual scroller content
          "& .MuiDataGrid-virtualScrollerContent": {
            backgroundColor: theme.palette.primaryblack.default,
          },
          // Custom styling for scrollbars in the virtual scroller
          "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
            width: "0.4em",
          },
          "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
            background: theme.palette.primaryblack.default,
          },
          "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
            backgroundColor: "#555",
            borderRadius: "4px",
          },
          "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
          // Custom styling for the footer container
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.primaryblack.default,
            color: theme.palette.text.default,
            borderTop: `1px solid ${theme.palette.background.default}`,
            borderRadius: " 0px 0px 0.55rem 0.55rem",
          },
          // Custom styling for button text color
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.text.default} !important`,
          },
          // Custom styling for toolbar, SVG icons, etc.
          "& .MuiToolbar-root": {
            color: `${theme.palette.text.default} !important`,
          },
          "& .MuiSvgIcon-root": {
            color: `${theme.palette.text.default} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row.index} // Function to retrieve unique IDs for each row
          rows={(data && data.monsters) || []} // Data to be displayed in the grid
          columns={monsterColumns} // Column configuration for the grid
          onSelectionModelChange={handleRowSelection}
          rowCount={(data && data.monsters.length) || 0} // Total number of rows (used for pagination)
          rowsPerPageOptions={[100]} // Options for rows per page dropdown
        />
      </Box>

      {/* Right side: Monster Details */}
      <Box
        width="100%"
        display="block"
        p="1.25rem 1rem"
        backgroundColor={theme.palette.primaryblack.default}
        borderRadius="0.55rem"
        minWidth="500px"
        sx={{ overflowY: "scroll" }}
      >
        {/* Conditional rendering based on monsterData */}
        {monsterData && !monsterIsLoading ? (
          <Box>
            {/* Monster Name */}
            <Typography variant="h2" textAlign="center">
              {monsterData.monster.name}
            </Typography>
            {/* Monster Image */}
            <Box
              pt="20px"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {imageURL && (
                <img
                  src={imageURL}
                  onClick={openImageInNewTab}
                  alt="Generated Image"
                  style={{
                    maxWidth: "400px",
                    maxHeight: "400px",
                    cursor: "pointer",
                  }}
                />
              )}
              {/* Loading indicator */}
              <Box pt="20px">
                {loading && (
                  <LinearProgress
                    sx={{
                      backgroundColor: theme.palette.primaryred.default,
                      width: "450px",
                      height: "4px",
                      borderRadius: "0.33rem",
                      mb: "20px",
                    }}
                  />
                )}
              </Box>
              {/* Button to generate image */}
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
            </Box>

            {/* Monster Description */}
            <Typography variant="h4">Description:</Typography>
            <CssBox>
              <ul>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Name:
                    </strong>{" "}
                    {monsterData.monster.name}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Size:
                    </strong>{" "}
                    {monsterData.monster.size}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Type:
                    </strong>{" "}
                    {monsterData.monster.type}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Alignment:
                    </strong>{" "}
                    {monsterData.monster.alignment}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Languages:
                    </strong>{" "}
                    {monsterData.monster.languages
                      ? monsterData.monster.languages
                      : "None"}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Challenge Rating:
                    </strong>{" "}
                    {monsterData.monster.challenge_rating}
                  </Typography>
                </li>
              </ul>
            </CssBox>

            {/* Monster Stats */}
            <Typography variant="h4">Stats:</Typography>
            <CssBox>
              <ul>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Armor Class:
                    </strong>{" "}
                    {monsterData.monster.armor_class
                      .map((ac) => `${ac.value} (${ac.type})`)
                      .join(", ")}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Strength:
                    </strong>{" "}
                    {monsterData.monster.strength}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Dexterity:
                    </strong>{" "}
                    {monsterData.monster.dexterity}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Constitution:
                    </strong>{" "}
                    {monsterData.monster.constitution}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Intelligence:
                    </strong>{" "}
                    {monsterData.monster.intelligence}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Wisdom:
                    </strong>{" "}
                    {monsterData.monster.wisdom}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Charisma:
                    </strong>{" "}
                    {monsterData.monster.charisma}
                  </Typography>
                </li>
              </ul>
            </CssBox>

            {/* Monster Life & Hit Properties */}
            <Typography variant="h4">Life & Hit Properties:</Typography>
            <CssBox>
              <ul>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Hit Dice:
                    </strong>{" "}
                    {monsterData.monster.hit_dice.length
                      ? monsterData.monster.hit_dice
                      : "None"}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Hit Points:
                    </strong>{" "}
                    {monsterData.monster.hit_points}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Hit Points Roll:
                    </strong>{" "}
                    {monsterData.monster.hit_points_roll.length
                      ? monsterData.monster.hit_points_roll
                      : "None"}
                  </Typography>
                </li>
              </ul>
            </CssBox>

            {/* Monster Resistances & Vulnerabilities */}
            <Typography variant="h4">Resistances & Vulnerabilities:</Typography>
            <CssBox>
              <ul>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Damage Immunities:
                    </strong>{" "}
                    {monsterData.monster.damage_immunities.length
                      ? monsterData.monster.damage_immunities.join(", ")
                      : "None"}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Damage Resistances:
                    </strong>{" "}
                    {monsterData.monster.damage_resistances.length
                      ? monsterData.monster.damage_resistances.join(", ")
                      : "None"}
                  </Typography>
                </li>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Damage Vulnerabilities:
                    </strong>{" "}
                    {monsterData.monster.damage_vulnerabilities.length
                      ? monsterData.monster.damage_vulnerabilities.join(", ")
                      : "None"}
                  </Typography>
                </li>
              </ul>
            </CssBox>

            {/* Monster Condition Immunities */}
            <Typography variant="h4">Condition Immunities:</Typography>
            <CssBox>
              {monsterData.monster.condition_immunities?.length ? (
                <ul>
                  {monsterData.monster.condition_immunities.map(
                    (action, index) => (
                      <li key={index}>
                        <Typography variant="h5">
                          <strong
                            style={{
                              color: theme.palette.secondaryred.default,
                            }}
                          >
                            {action.name}:
                          </strong>{" "}
                          {action.desc}
                        </Typography>
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <Typography variant="h5">
                  <li style={{ paddingLeft: "25px" }}>None</li>
                </Typography>
              )}
            </CssBox>

            {/* Monster Proficiencies */}
            <Typography variant="h4">Proficiencies:</Typography>
            <CssBox>
              {monsterData.monster.condition_immunities?.length ? (
                <ul>
                  {monsterData.monster.proficiencies?.map(
                    (proficiency, index) => (
                      <li key={index}>
                        <Typography variant="h5">
                          <strong
                            style={{
                              color: theme.palette.secondaryred.default,
                            }}
                          >
                            {proficiency.proficiency.name}:
                          </strong>{" "}
                          {proficiency.value}
                        </Typography>
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <Typography variant="h5">
                  <li style={{ paddingLeft: "25px" }}>None</li>
                </Typography>
              )}
            </CssBox>

            {/* Monster Senses */}
            <Typography variant="h4">Senses:</Typography>
            <CssBox>
              <ul>
                {Object.entries(monsterData.monster.senses || {}).map(
                  ([sense, value]) => (
                    <li key={sense}>
                      <Typography variant="h5">
                        <strong
                          style={{ color: theme.palette.secondaryred.default }}
                        >
                          {sense.replace(/_/g, " ")}:
                        </strong>{" "}
                        {value}
                      </Typography>
                    </li>
                  )
                )}
              </ul>
            </CssBox>

            {/* Monster Speed */}
            <Typography variant="h4">Speed:</Typography>
            <CssBox>
              <ul>
                {Object.entries(monsterData.monster.speed || {}).map(
                  ([speedType, speedValue]) => (
                    <li key={speedType}>
                      <Typography variant="h5">
                        <strong
                          style={{ color: theme.palette.secondaryred.default }}
                        >
                          {speedType.charAt(0).toUpperCase() +
                            speedType.slice(1)}
                          : {/* Capitalize first letter */}
                        </strong>{" "}
                        {speedValue}
                      </Typography>
                    </li>
                  )
                )}
              </ul>
            </CssBox>

            {/* Monster Actions */}
            <Typography variant="h4">Actions:</Typography>
            <CssBox>
              {monsterData.monster.actionsactions?.length ? (
                <ul>
                  {monsterData.monster.actions.map((action, index) => (
                    <li key={index}>
                      <Typography variant="h5" paddingRight="10px">
                        <strong
                          style={{ color: theme.palette.secondaryred.default }}
                        >
                          {action.name}:
                        </strong>{" "}
                        {action.desc}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ) : (
                <Typography variant="h5">
                  <li style={{ paddingLeft: "25px" }}>None</li>
                </Typography>
              )}
            </CssBox>

            {/* Monster Special Abilities */}
            <Typography variant="h4">Special Abilities:</Typography>
            <CssBox>
              {monsterData.monster.special_abilities?.length ? (
                <ul>
                  {monsterData.monster.special_abilities?.map(
                    (ability, index) => (
                      <li key={index}>
                        <Typography variant="h5">
                          <strong
                            style={{
                              color: theme.palette.secondaryred.default,
                            }}
                          >
                            {ability.name}:
                          </strong>{" "}
                          {ability.desc}
                        </Typography>
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <Typography variant="h5">
                  <li style={{ paddingLeft: "25px" }}>None</li>
                </Typography>
              )}
            </CssBox>

            {/* Monster Legendary Actions */}
            <Typography variant="h4">Legendary Actions:</Typography>
            <CssBox>
              {monsterData.monster.legendary_actions?.length ? (
                <ul>
                  {monsterData.monster.legendary_actions.map(
                    (action, index) => (
                      <li key={index}>
                        <Typography variant="h5">
                          <strong
                            style={{
                              color: theme.palette.secondaryred.default,
                            }}
                          >
                            {action.name}:
                          </strong>{" "}
                          {action.desc}
                        </Typography>
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <Typography variant="h5">
                  <li style={{ paddingLeft: "25px" }}>None</li>
                </Typography>
              )}
            </CssBox>
          </Box>
        ) : (
          <Typography variant="h4">Select a monster from the list</Typography>
        )}
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

export default MonsterE;
