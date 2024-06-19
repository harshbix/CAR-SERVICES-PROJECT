import express from 'express';
import { getUsers, addUser } from '../controllers/userController.js';
import verifyJWT from '../middleware/verifyJWT.js';

const router = express.Router();

// Route to get all users (protected route)
router.get('/users', verifyJWT, getUsers);

// Route to add a new user
router.post('/signup', addUser);

export default router;
