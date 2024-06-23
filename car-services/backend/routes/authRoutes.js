import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Route to handle user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        userType: user.role // Adjust based on your User model
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Determine the redirect URL based on the user's role
    let redirectUrl = '/home';
    if (user.role === 'mechanic') {
      redirectUrl = '/mechanics';
    } else if (user.role === 'admin') {
      redirectUrl = '/admin';
    }

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        userType: user.role // Adjust based on your User model
      },
      redirectUrl
    });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
