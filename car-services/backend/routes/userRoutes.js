import express from 'express';
import { getUsers, addUser } from '../controllers/userController.js'; // Import controllers

const router = express.Router();

// Route to get all users
router.get('/users', getUsers);

// Route to add a new user
router.post('/signup', addUser);

export default router;
