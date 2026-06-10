import express from 'express';
import { protect, authorize } from '../middleware/auth.middleware.js';
import { createSale, updateSale, deleteSale, getSales } from '../controllers/sales.controller.js';

const router = express.Router();
router.get('/', protect, authorize('admin', 'analyst', 'viewer'), getSales);
router.post('/', protect, authorize('admin', 'analyst'), createSale);
router.put('/:id', protect, authorize('admin', 'analyst'), updateSale);
router.delete('/:id', protect, authorize('admin'), deleteSale);

export default router;
