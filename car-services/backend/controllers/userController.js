import User from '../models/User.js';
import bcrypt from 'bcryptjs';

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add a new user
export const addUser = async (req, res) => {
  const { name, phone, email, location, userType, password } = req.body;

  if (!name || !phone || !email || !location || !userType || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, phone, email, location, userType, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = error.errors.map(err => err.message);
      return res.status(400).json({ error: validationErrors });
    }
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};
