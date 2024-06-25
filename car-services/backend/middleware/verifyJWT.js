import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  if (!authHeader) {
    return res.status(403).json({ error: 'No token provided' });
  }

  // Split the authHeader to get the actual token
  const token = authHeader.split(' ')[1];

  // Log the token for debugging
  console.log('Token:', token);

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

export default verifyJWT;
