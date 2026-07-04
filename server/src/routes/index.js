import express from 'express';
import consultRoutes from './consultRoutes.js';
import chatRoutes from './chatRoutes.js';

const router = express.Router();

router.use(consultRoutes);
router.use(chatRoutes);

export default router;
