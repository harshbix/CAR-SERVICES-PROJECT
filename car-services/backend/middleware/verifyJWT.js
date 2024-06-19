import jwt from 'jsonwebtoken';

const verifyJWT = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

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

export default verifyJWT;
