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

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json()); // Parse requests with JSON payloads
app.use(cors()); // Enable CORS for all routes

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// Handle favicon.ico request
app.get('/favicon.ico', (req, res) => {
  res.status(204); // No content response
});

// Routes
app.use('/api', userRoutes); // API routes for user-related operations
app.use('/auth', authRoutes); // API routes for authentication

// Middleware to verify JWT
const verifyJWT = (req, res, next) => {
  const token = req.headers['authorization'];
  
  // Check if token is present
  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  // Verify the JWT token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Failed to authenticate token:', err);
      return res.status(500).json({ error: 'Failed to authenticate token' });
    }

    // Store decoded user information in request object for use in subsequent middleware or routes
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

// Apply verifyJWT middleware to all routes under /api (except /api/login and /api/signup)
app.use('/api', (req, res, next) => {
  if (req.path === '/login' || req.path === '/signup') {
    return next(); // Skip authentication for login and signup routes
  }
  verifyJWT(req, res, next); // Apply verifyJWT middleware to other routes
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: 'Unauthorized' });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Catch-all route handler: serve React's index.html for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Initialize database and start the server
(async () => {
  try {
    await sequelize.sync(); // Sync database models with database schema
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error initializing the database:', error);
  }
})();
