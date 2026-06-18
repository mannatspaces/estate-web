import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export const createAdminUser = async () => {
  const existingAdmin = await User.findOne({ isAdmin: true });
  if (existingAdmin) return;

  const password = process.env.ADMIN_PASSWORD || 'Admin@123';
  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    fullName: process.env.ADMIN_NAME || 'MannatSpaces Admin',
    email: process.env.ADMIN_EMAIL || 'admin@mannatspaces.in',
    mobile: process.env.ADMIN_MOBILE || '9988776655',
    password: hashedPassword,
    isAdmin: true
  });
};
