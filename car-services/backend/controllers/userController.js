import User from '../models/User.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addUser = async (req, res) => {
  try {
    const { name, email, location, stars } = req.body;
    const newUser = await User.create({ name, email, location, stars });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
