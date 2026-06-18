import User from '../models/User.js';

export const findUserByEmail = async (email) => {
  return User.findOne({ email });
};

export const listUsers = async () => {
  return User.find().select('-password');
};
