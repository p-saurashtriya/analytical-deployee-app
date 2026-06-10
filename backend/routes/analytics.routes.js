import express from 'express';
import { protect, authorize } from '../middleware/auth.middleware.js';
import { getAnalytics } from '../controllers/analytics.controller.js';

const router = express.Router();
router.get('/', protect, authorize('admin', 'analyst'), getAnalytics);

export default router;
