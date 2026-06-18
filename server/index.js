import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './config/db.js';
import propertyRoutes from './routes/propertyRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';
import userRoutes from './routes/userRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import { createAdminUser } from './seed/adminSeed.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config();

console.log('Cloud Name =', process.env.CLOUDINARY_CLOUD_NAME);
console.log('API Key =', process.env.CLOUDINARY_API_KEY);
console.log('API Secret =', process.env.CLOUDINARY_API_SECRET);
const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());
app.use('/api/upload', uploadRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'MannatSpaces backend is running.' });
});

const mongoUrl = process.env.MONGODB_URI || '';

connectDatabase(mongoUrl)
  .then(async () => {
    await createAdminUser();
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  });
