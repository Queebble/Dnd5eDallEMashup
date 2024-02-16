import fetch from "node-fetch";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

// Define an asynchronous function to generate a DALL·E image with a size of 256x256
export const generateImage256 = async (req, res) => {
  try {
    // Extract the "prompt" and the OpenAI API key from the request body and environment variables
    const prompt = req.body.prompt;
    const apiKey = process.env.OPENAI_API_KEY;

    // Log the prompt and API key for debugging purposes
    console.log(prompt, apiKey);

    // Send an HTTP POST request to the OpenAI API to generate an image with size 256x256
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`, // Include the API key in the request headers
        },
        body: JSON.stringify({
          prompt: prompt,
          n: 1, // Generate a single image
          size: "256x256", // Specify the image size
        }),
      }
    );

    // Parse the response JSON data
    const data = await response.json();

    // Check if the response from the API is successful (HTTP status code 200)
    if (response.ok) {
      // Respond with a JSON object containing the generated image
      res.status(200).json({ success: true, image: data });
    } else {
      // Log and respond with an error message if the API request fails
      console.error("256x256 OpenAI API Error:", data.error.message);
      res.status(response.status).json({ error: data.error.message });
    }
  } catch (error) {
    // Handle and log any errors that occur during the process
    console.error("256x256 Error generating DALL·E image:", error.message);
    // Respond with a 500 Internal Server Error status and an error message
    res.status(500).json({
      error: "256x256 An error occurred while generating the DALL·E image.",
    });
  }
};

// Define similar asynchronous functions for generating DALL·E images with sizes 512x512 and 1024x1024
export const generateImage512 = async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const apiKey = process.env.OPENAI_API_KEY;
    console.log(prompt, apiKey);

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: prompt,
          n: 1,
          size: "512x512",
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      res.status(200).json({ success: true, image: data });
    } else {
      console.error("512x512 OpenAI API Error:", data.error.message);
      res.status(response.status).json({ error: data.error.message });
    }
  } catch (error) {
    console.error("512x512 Error generating DALL·E image:", error.message);
    res.status(500).json({
      error: "512x512 An error occurred while generating the DALL·E image.",
    });
  }
};

// Define similar asynchronous functions for generating DALL·E images with sizes 512x512 and 1024x1024
export const generateImage1024 = async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const apiKey = process.env.OPENAI_API_KEY;
    console.log(prompt, apiKey);

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "dall-e-3",
          quality: "hd",
          prompt: prompt,
          n: 1,
          size: "1024x1024",
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      res.status(200).json({ success: true, image: data });
    } else {
      console.error("1024x1024 OpenAI API Error:", data.error.message);
      res.status(response.status).json({ error: data.error.message });
    }
  } catch (error) {
    console.error("1024x1024 Error generating DALL·E image:", error.message);
    res.status(500).json({
      error: "1024x1024 An error occurred while generating the DALL·E image.",
    });
  }
};
