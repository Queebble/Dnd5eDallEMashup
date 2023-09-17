import fetch from "node-fetch";

// Define an asynchronous function to fetch D&D classes from an API
export const dndClasses = async (req, res) => {
  try {
    // Send an HTTP GET request to the D&D classes API
    const response = await fetch("https://www.dnd5eapi.co/api/classes");

    // Check if the response from the API is successful (HTTP status code 200)
    if (response.ok) {
      // Parse the response JSON data
      const data = await response.json();
      // Respond with a JSON object containing the retrieved D&D classes
      res.status(200).json({ success: true, classes: data.results });
    } else {
      // Throw an error if the API request fails
      throw new Error("Failed to fetch D&D classes");
    }
  } catch (error) {
    // Handle and log any errors that occur during the process
    console.error("Error fetching D&D classes from the API:", error);
    // Respond with a 500 Internal Server Error status and an error message
    res
      .status(500)
      .json({ error: "An error occurred while fetching D&D classes." });
  }
};

// Similar asynchronous functions for other D&D API endpoints
export const dndRaces = async (req, res) => {
  try {
    const response = await fetch("https://www.dnd5eapi.co/api/races/");

    if (response.ok) {
      const data = await response.json();
      res.status(200).json({ success: true, races: data.results });
    } else {
      throw new Error("failed to fetch dnd races");
    }
  } catch (error) {
    console.error("Error fecthing dnd races from api:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching dnd races." });
  }
};

// Similar asynchronous functions for other D&D API endpoints
export const dndSubRaces = async (req, res) => {
  try {
    const response = await fetch("https://www.dnd5eapi.co/api/subraces/");

    if (response.ok) {
      const data = await response.json();
      res.status(200).json({ success: true, subraces: data.results });
    } else {
      throw new Error("failed to fetch dnd subraces");
    }
  } catch (error) {
    console.error("Error fecthing dnd subraces from api:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching dnd subraces." });
  }
};

// Similar asynchronous functions for other D&D API endpoints
export const dndAlignments = async (req, res) => {
  try {
    const response = await fetch("https://www.dnd5eapi.co/api/alignments/");

    if (response.ok) {
      const data = await response.json();
      res.status(200).json({ success: true, alignments: data.results });
    } else {
      throw new Error("failed to fetch dnd alignments");
    }
  } catch (error) {
    console.error("Error fecthing dnd alignments from api:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching dnd alignments." });
  }
};

// Similar asynchronous functions for other D&D API endpoints
export const dndMonsters = async (req, res) => {
  try {
    const response = await fetch("https://www.dnd5eapi.co/api/monsters/");

    if (response.ok) {
      const data = await response.json();
      res.status(200).json({ success: true, monsters: data.results });
    } else {
      throw new Error("failed to fetch dnd monsters");
    }
  } catch (error) {
    console.error("Error fecthing dnd monsters from api:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the dnd monsters." });
  }
};

// Similar asynchronous functions for other D&D API endpoints
export const dndMonsterData = async (req, res) => {
  try {
    const { name } = req.query;

    const response = await fetch(
      `https://www.dnd5eapi.co/api/monsters/${name}`
    );

    if (response.ok) {
      const data = await response.json();
      res.status(200).json({ success: true, monster: data });
    } else {
      throw new Error("failed to fetch dnd monster");
    }
  } catch (error) {
    console.error("Error fetching the dnd monster from api:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the dnd monster." });
  }
};

// Similar asynchronous functions for other D&D API endpoints
export const dndEquipments = async (req, res) => {
  try {
    const response = await fetch("https://www.dnd5eapi.co/api/magic-items/");

    if (response.ok) {
      const data = await response.json();
      res.status(200).json({ success: true, equipments: data.results });
    } else {
      throw new Error("failed to fetch dnd equipments");
    }
  } catch (error) {
    console.error("Error fetching dnd equipments from api:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the dnd equipments." });
  }
};

// Similar asynchronous functions for other D&D API endpoints
export const dndEquipmentData = async (req, res) => {
  try {
    const { name } = req.query;
    const response = await fetch(
      `https://www.dnd5eapi.co/api/magic-items/${name}`
    );

    if (response.ok) {
      const data = await response.json();
      res.status(200).json({ success: true, equipment: data });
    } else {
      throw new Error("failed to fetch dnd equipment");
    }
  } catch (error) {
    console.error("Error fetching dnd equipment from api:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the dnd equipment." });
  }
};
