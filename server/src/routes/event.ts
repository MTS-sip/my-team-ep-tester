// chs
import express from "express";
import Event from "../models/event.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/public", async (_req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
});

router.post("/", authenticateToken, async (req, res) => {
  try {
    const { title, description, createdBy } = req.body;
    const newEvent = await Event.create({ title, description, createdBy });
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
});

export default router;
