import express from 'express';
import Event from '../models/Event.js'; // Corrected import
import { authenticateToken } from '../middleware/authMiddleware.js'; // Middleware

const router = express.Router();

// Get all events (public)
router.get('/public', async (_req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
});

// Create a new event (protected route)
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!req.user || !req.user.id) {
      return res.status(400).json({ message: 'Invalid user' });
    }
    const { id: createdBy } = req.user; // Use the logged-in user's ID from JWT

    const newEvent = await Event.create({ title, description, createdBy });
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error });
  }
});

// Delete an event (protected)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    await Event.destroy({ where: { id } });
    res.json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error });
  }
});

export default router;
