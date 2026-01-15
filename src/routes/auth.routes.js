import express from "express";

const router = express.Router();

/* TEMP login */
router.post("/login", (req, res) => {
  res.json(req.body);
});

export default router;
