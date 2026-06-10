import express from 'express';
import { protect, authorize } from '../middleware/auth.middleware.js';
import { exportSales } from '../controllers/export.controller.js';

const router = express.Router();
router.get('/sales', protect, authorize('admin', 'analyst'), exportSales);

export default router;
