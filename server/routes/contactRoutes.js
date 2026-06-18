import express from 'express';
import { adminAuth } from '../middleware/auth.js';
import { createContactRequest, getContactRequests } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', createContactRequest);
router.get('/', adminAuth, getContactRequests);

export default router;
