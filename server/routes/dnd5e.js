import express from "express";
import {
  dndClasses,
  dndAlignments,
  dndRaces,
  dndSubRaces,
  dndMonsters,
  dndMonsterData,
  dndEquipments,
  dndEquipmentData,
} from "../controllers/dnd5e.js";

// Create an instance of an Express router
const router = express.Router();

// Define a routes that responds to HTTP GET requests at the "specified" path
router.get("/classes", dndClasses);
router.get("/alignments", dndAlignments);
router.get("/races", dndRaces);
router.get("/subraces", dndSubRaces);
router.get("/monsters", dndMonsters);
router.get("/monsterdata", dndMonsterData);
router.get("/equipments", dndEquipments);
router.get("/equipmentdata", dndEquipmentData);

// Export the router to be used by other parts of the application
export default router;
