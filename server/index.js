import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import dnd5eRoutes from "./routes/dnd5e.js";
import openaiRoutes from "./routes/openai.js";
import counterRoutes from "./routes/counter.js";
import AWS from "aws-sdk";

// Create an instance of the Express application
const app = express();

// Define the server's port number (default to 5000 if not specified in the environment)
const PORT = 5000 || 5001;

// Define the Amazon S3 bucket and object key for the user counter
const bucket = "n10214747cloudmashup";
const counterKey = "usercounter.json";

// Create a new instance of the AWS S3 client
const s3 = new AWS.S3();

// Function to initialize the user counter in Amazon S3
async function initializeCounter() {
  try {
    // Check if the user counter object already exists in the S3 bucket
    await s3.headObject({ Bucket: bucket, Key: counterKey }).promise();
  } catch (error) {
    // If the object doesn't exist (404 status code), create it with an initial count of 0
    if (error.statusCode === 404) {
      await s3
        .putObject({
          Bucket: bucket,
          Key: counterKey,
          Body: JSON.stringify({ count: 0 }),
          ContentType: "application/json",
        })
        .promise();
    }
  }
}

// Initialize the user counter when the application starts
initializeCounter();

// Load environment variables from a .env file (if available)
dotenv.config();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware for enhancing security with various HTTP headers
app.use(helmet());

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware for logging HTTP requests (in a common format)
app.use(morgan("common"));

// Define routes for different parts of the application
app.use("/dnd", dnd5eRoutes); // D&D 5th Edition related routes
app.use("/image", openaiRoutes); // OpenAI integration related routes
app.use("/user", counterRoutes); // User counter related routes

// Start the Express server and listen on the specified port
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
