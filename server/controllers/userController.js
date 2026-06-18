import User from '../models/User.js';

export const getProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

export const updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  const { fullName, mobile, avatar } = req.body;
  if (fullName) user.fullName = fullName;
  if (mobile) user.mobile = mobile;
  if (avatar) user.avatar = avatar;
  await user.save();
  res.json({ message: 'Profile updated', user: await User.findById(req.user._id).select('-password') });
};
