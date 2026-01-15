import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import entriesRoutes from "./routes/entries.routes.js";

dotenv.config();

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(cors());
app.use(express.json());

/* ---------- ROUTES ---------- */
app.use("/api/entries", entriesRoutes);

/* ---------- HEALTH CHECK ---------- */
app.get("/", (req, res) => {
  res.send("🚀 Shared Expense Backend is running");
});

/* ---------- DB + SERVER ---------- */
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
