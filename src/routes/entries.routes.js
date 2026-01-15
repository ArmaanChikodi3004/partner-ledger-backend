import express from "express";
import {
  createEntry,
  getAllEntries,
  deleteEntryById,
} from "../controllers/entry.controller.js";

const router = express.Router();

router.post("/", createEntry);
router.get("/", getAllEntries);
router.delete("/:id", deleteEntryById);

export default router;
