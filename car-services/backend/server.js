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

// Example protected route
app.get('/protected', verifyJWT, (req, res) => {
  res.json({ message: `Hello, user ${req.userId} with role ${req.userRole}` });
});

// Middleware to enforce authentication for all routes except /api/login and /api/signup
app.use((req, res, next) => {
  if (req.path === '/api/login' || req.path === '/api/signup') {
    return next(); // Skip authentication for login and signup routes
  }
  verifyJWT(req, res, next); // Apply authentication middleware to other routes
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
