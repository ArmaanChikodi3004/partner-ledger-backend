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
    const entries = await Entry.find().sort({ createdAt: -1 });
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
    await Entry.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (error) {
    console.error("Delete Entry Error:", error);
    res.status(500).json({ message: "Failed to delete entry" });
  }
};
