import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const JWT_SECRET = process.env.JWT_SECRET || 'MannatSpacesSecret123!';

export const register = async (req, res) => {
  const { fullName, email, mobile, password } = req.body;
  if (await User.findOne({ email })) return res.status(409).json({ message: 'Email already exists', error: 'Email already exists' });
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ fullName, email, mobile, password: hash });
  await user.save();
  res.status(201).json({ message: 'Registered successfully' });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials', error: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials', error: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '8h' });
  res.json({ token, user: { id: user._id, fullName: user.fullName, email: user.email, isAdmin: user.isAdmin } });
};
