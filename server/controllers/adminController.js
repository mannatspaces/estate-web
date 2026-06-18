import User from '../models/User.js';
import Property from '../models/Property.js';
import ContactRequest from '../models/ContactRequest.js';

export const getAdminUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Unable to load users.' });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const propertyCount = await Property.countDocuments();
    const contactCount = await ContactRequest.countDocuments();
    res.json({ userCount, propertyCount, contactCount });
  } catch (error) {
    res.status(500).json({ error: 'Unable to load dashboard stats.' });
  }
};
