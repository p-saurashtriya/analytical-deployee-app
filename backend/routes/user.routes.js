import express from 'express';
import { protect, authorize } from '../middleware/auth.middleware.js';
import { getUsers, getUser, updateUser } from '../controllers/user.controller.js';

const router = express.Router();
router.use(protect, authorize('admin'));
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);

export default router;
