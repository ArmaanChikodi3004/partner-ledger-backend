import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import entryRoutes from "./routes/entries.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { initSocket } from "./socket.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* ---------------- MIDDLEWARE ---------------- */
app.use(cors());
app.use(express.json());

/* ---------------- ROUTES ---------------- */
app.use("/api/entries", entryRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Partner Ledger Backend Running");
});

/* ---------------- HTTP SERVER ---------------- */
const server = http.createServer(app);

/* ---------------- SOCKET.IO INIT ---------------- */
initSocket(server);

/* ---------------- MONGODB ---------------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    server.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed:", err);
  });
