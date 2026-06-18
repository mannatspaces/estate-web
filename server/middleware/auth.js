import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const JWT_SECRET = process.env.JWT_SECRET || 'MannatSpacesSecret123!';

export const userAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export const adminAuth = async (req, res, next) => {
  console.log('AUTH HEADER =', req.headers.authorization);

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('DECODED =', decoded);

    const user = await User.findById(decoded.id);

    if (!user?.isAdmin) {
      return res.status(403).json({ error: 'Admin access required' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.log('JWT ERROR =', err.message);
    res.status(401).json({ error: 'Invalid token' });
  }
};