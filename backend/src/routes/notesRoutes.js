import express from "express";
import rateLimiter from "../middleware/rateLimiter.js";
import {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from "../controllers/notesControllers.js";
const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);

router.post("/", rateLimiter, createNote);

router.delete("/:id", deleteNote);
router.put("/:id", updateNote);

export default router;
