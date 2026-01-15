import express from "express";
import {
  createEntry,
  getAllEntries,
  deleteEntryById,
} from "../controllers/entry.controller.js";

const router = express.Router();

router.get("/", getAllEntries);
router.post("/", createEntry);
router.delete("/:id", deleteEntryById);

export default router;
