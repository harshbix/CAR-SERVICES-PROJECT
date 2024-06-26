// routes/requestRoutes.js
import express from 'express';
import jwt from 'jsonwebtoken';
import Request from '../models/request.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Middleware to verify JWT
const verifyJWT = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Failed to authenticate token:', err);
      return res.status(500).json({ error: 'Failed to authenticate token' });
    }

    req.userId = decoded.id;
    req.userRole = decoded.userType; // Adjusted to match user role in JWT payload
    next();
  });
};

router.post('/create', verifyJWT, async (req, res) => {
  const { mechanicId, message } = req.body;
  const userId = req.userId; // assuming user ID is set in the JWT payload

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
