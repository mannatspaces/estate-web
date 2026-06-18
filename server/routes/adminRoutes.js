import express from 'express';
import { adminAuth } from '../middleware/auth.js';
import {
  createProperty,
  updateProperty,
  deleteProperty
} from '../controllers/propertyController.js';
import { getAdminUsers, getDashboardStats } from '../controllers/adminController.js';

const router = express.Router();

router.use(adminAuth);
router.get('/stats', getDashboardStats);
router.get('/users', getAdminUsers);
router.post('/properties', createProperty);
router.put('/properties/:id', updateProperty);
router.delete('/properties/:id', deleteProperty);

export default router;
