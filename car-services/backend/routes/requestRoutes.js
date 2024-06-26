// routes/requestRoutes.js
import express from 'express';
import Request from '../models/request.js';
import { verifyJWT } from '../middleware/verifyJWT.js'; // adjust the path according to your project structure

const router = express.Router();

router.post('/create', verifyJWT, async (req, res) => {
  const { mechanicId, message } = req.body;
  const userId = req.user.id; // assuming user ID is set in the JWT payload

  try {
    const newRequest = await Request.create({
      userId,
      mechanicId,
      message
    });
    res.status(201).json(newRequest);
  } catch (error) {
    console.error('Error creating request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
