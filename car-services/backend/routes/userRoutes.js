import express from 'express';
import { getUsers } from '../controllers/userController.js';
import verifyJWT from '../middleware/verifyJWT.js'; // Example middleware for JWT verification

const router = express.Router();

// Route to get all users (protected route)
router.get('/users', verifyJWT, getUsers);


// Route to add a new user
router.post('/signup', async (req, res) => {
  try {
    await addUser(req, res);
  } catch (error) {
    console.error('Error in POST /signup:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

export default router;
