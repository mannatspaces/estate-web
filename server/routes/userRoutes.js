import express from 'express';
import { userAuth } from '../middleware/auth.js';
import { getProfile, updateProfile } from '../controllers/userController.js';

const router = express.Router();

router.get('/me', userAuth, getProfile);
router.put('/me', userAuth, updateProfile);

export default router;
