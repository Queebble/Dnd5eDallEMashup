import express from "express";
import {
  generateImage256,
  generateImage512,
  generateImage1024,
} from "../controllers/openai.js";

// Create an instance of an Express router
const router = express.Router();

// Define a routes that responds to HTTP post requests at the "specified" path
router.post("/256", generateImage256);
router.post("/512", generateImage512);
router.post("/1024", generateImage1024);

// Export the router to be used by other parts of the application
export default router;
