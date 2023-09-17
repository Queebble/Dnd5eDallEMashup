import express from "express";
import { userCounter } from "../controllers/counter.js";

// Create an instance of an Express router
const router = express.Router();

// Define a route that responds to HTTP GET requests at the "/count" path
router.get("/count", userCounter);

// Export the router to be used by other parts of the application
export default router;
