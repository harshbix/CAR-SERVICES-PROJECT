import express from 'express';
import jwt from 'jsonwebtoken';
import Request from '../models/request.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Middleware to verify JWT
const verifyJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

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

router.post('/requests', verifyJWT, async (req, res) => {
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
