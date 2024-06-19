import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import sequelize from './config/db.js';
import jwt from 'jsonwebtoken';

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// Routes
app.use('/api', userRoutes);
app.use('/auth', authRoutes);

// Middleware to verify JWT
const verifyJWT = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).json({ error: 'Failed to authenticate token' });

    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

// Protected route example
app.get('/protected', verifyJWT, (req, res) => {
  res.json({ message: `Hello, user ${req.userId} with role ${req.userRole}` });
});

// All routes other than /api/login and /api/signup require authentication
app.use((req, res, next) => {
  if (req.path === '/api/login' || req.path === '/api/signup') {
    return next(); // Skip authentication for login and signup routes
  }
  verifyJWT(req, res, next); // Apply authentication middleware to other routes
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Initialize database and start server
(async () => {
  try {
    await sequelize.sync();
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error initializing the database:', error);
  }
})();
