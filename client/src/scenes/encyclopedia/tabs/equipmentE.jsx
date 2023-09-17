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
  useGetEquipmentsQuery,
  useGetEquipmentDataQuery,
  useGenerateImage512Mutation,
} from "../../../state/api";
import diceImage from "../../../assets/templogo.png";

// Define the EquipmentE component
const EquipmentE = () => {
  const theme = useTheme();

  // Fetch equipment data and loading status
  const { data, isLoading } = useGetEquipmentsQuery();

  // State for the selected equipment's name
  const [name, setName] = useState(null);

  // Fetch equipment data for the selected equipment
  const { data: equipmentData, isLoading: equipmentIsLoading } =
    useGetEquipmentDataQuery({ name });

  // Mutation to generate an equipment image
  const [generateImage] = useGenerateImage512Mutation();

  // State for loading state of image generation
  const [loading, setLoading] = useState(false);

  // State for error message
  const [errorMessage, setErrorMessage] = useState("");

  // State for the URL of the generated image
  const [imageURL, setImageURL] = useState(diceImage);

  // Function to handle generating an equipment image
  const handleGenerateImage = async () => {
    setLoading(true); // Start loading

    // Call the mutation to generate the image
    const result = await generateImage(name + " Fantasy");
    const imageUrl = result?.data?.image.data[0].url;
    setImageURL(imageUrl ? imageUrl : imageURL);
    setErrorMessage(result.error?.data.error);

    setLoading(false); // Stop loading (whether successful or not)
  };

  // Function to handle selecting a row in the equipment list
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

  // Configuration for the equipment columns in the data grid
  const equipmentColumns = [
    {
      field: "name",
      headerName: "Equipment",
      flex: 1,
    },
  ];

  return (
    <Box display="flex" height="83vh" gap="20px">
      <Box
        minWidth="400px"
        display="block"
        backgroundColor={theme.palette.primaryblack.default}
        borderRadius="0.55rem"
        sx={{
          // Styling for the data grid and its elements
          "& .MuiDataGrid-root": {
            border: "none",
            borderBottom: "none",
            fontSize: "1rem",
          },
          "& .MuiButtonBase-root": {
            margin: "0px 4px 0px 4px",
            backgroundColor: `${theme.palette.buttonborder.default} !important`,
            color: "white !important",
          },
          // Styling for a specific CSS class
          "& .css-19rwt2y-MuiPaper-root": {
            backgroundColor: `red !important`,
            color: "white !important",
          },
          // Styling for cell background and text color
          "& .MuiDataGrid-cell": {
            borderColor: theme.palette.buttonborder.default,
            backgroundColor: theme.palette.primaryblack.default,
            color: theme.palette.text.default,
          },
          // Styling for the data grid toolbar container
          "& .MuiDataGrid-toolbarContainer": {
            backgroundColor: theme.palette.primaryblack.default,
            borderRadius: "0.55rem 0.55rem 0px 0px",
            boxShadow:
              "0px 3.890000104904175px 18.469999313354492px 0px rgba(0, 99, 231, 0.06)",
          },
          // Styling for column headers
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.secondaryred.default,
            color: theme.palette.text.default,
            borderBottom: `1px solid ${theme.palette.buttonborder.default} !important`,
            borderRadius: "0.55rem 0.55rem 0 0",
          },
          // Styling for the virtual scroller
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.buttonborder.default,
            overflowX: "hidden",
          },
          // Styling for the virtual scroller content
          "& .MuiDataGrid-virtualScrollerContent": {
            backgroundColor: theme.palette.primaryblack.default,
          },
          // Styling for scrollbars in the virtual scroller
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
          // Styling for the footer container
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.primaryblack.default,
            color: theme.palette.text.default,
            borderTop: `1px solid ${theme.palette.background.default}`,
            borderRadius: " 0px 0px 0.55rem 0.55rem",
          },
          // Styling for button text color
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.text.default} !important`,
          },
          // Styling for toolbar, SVG icons, etc.
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
          rows={(data && data.equipments) || []} // Data to be displayed in the grid
          columns={equipmentColumns} // Column configuration for the grid
          onSelectionModelChange={handleRowSelection}
          rowCount={(data && data.equipments.length) || 0} // Total number of rows (used for pagination)
          rowsPerPageOptions={[100]} // Options for rows per page dropdown
        />
      </Box>

      {/* Right side: Equipment Details */}
      <Box
        width="100%"
        display="block"
        p="1.25rem 1rem"
        backgroundColor={theme.palette.primaryblack.default}
        borderRadius="0.55rem"
        minWidth="500px"
        sx={{ overflowY: "scroll" }}
      >
        {equipmentData && !equipmentIsLoading ? (
          <Box>
            <Box>
              {/* Equipment Name */}
              <Typography variant="h2" textAlign="center">
                {equipmentData.equipment.name}
              </Typography>
              <Box
                pt="20px"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                {/* Equipment Image */}
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

                {/* Button to generate equipment image */}
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
            </Box>

            {/* Equipment Rarity */}
            <Typography variant="h4">Rarity:</Typography>
            <CssBox>
              <ul>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Rarity:
                    </strong>{" "}
                    {equipmentData.equipment.rarity.name.length
                      ? equipmentData.equipment.rarity.name
                      : "None"}
                  </Typography>
                </li>
              </ul>
            </CssBox>

            {/* Equipment Category */}
            <Typography variant="h4">Category:</Typography>
            <CssBox>
              <ul>
                <li>
                  <Typography variant="h5">
                    <strong
                      style={{ color: theme.palette.secondaryred.default }}
                    >
                      Equipment Type:
                    </strong>{" "}
                    {equipmentData.equipment.equipment_category.name.length
                      ? equipmentData.equipment.equipment_category.name
                      : "None"}
                  </Typography>
                </li>
              </ul>
            </CssBox>
            <Typography variant="h4">Description:</Typography>
            <CssBox>
              <ul>
                {equipmentData.equipment.desc.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </CssBox>
          </Box>
        ) : (
          // Displayed when no equipment is selected
          <Typography variant="h4">
            Select an equipment from the list
          </Typography>
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

export default EquipmentE;
