import Entry from "../models/Entry.js";

/* ---------------- CREATE ENTRY ---------------- */
export const createEntry = async (req, res) => {
  try {
    const entry = await Entry.create(req.body);
    res.status(201).json(entry);
  } catch (error) {
    console.error("Create Entry Error:", error);
    res.status(500).json({ message: "Failed to create entry" });
  }
};

/* ---------------- GET ALL ENTRIES ---------------- */
export const getAllEntries = async (req, res) => {
  try {
    const entries = await Entry.find().sort({ date: -1 });
    res.json(entries);
  } catch (error) {
    console.error("Get Entries Error:", error);
    res.status(500).json({ message: "Failed to fetch entries" });
  }
};

/* ---------------- DELETE ENTRY ---------------- */
export const deleteEntryById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEntry = await Entry.findByIdAndDelete(id);

    if (!deletedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json({ message: "Entry deleted successfully", id });
  } catch (error) {
    console.error("Delete Entry Error:", error);
    res.status(500).json({ message: "Failed to delete entry" });
  }
};
