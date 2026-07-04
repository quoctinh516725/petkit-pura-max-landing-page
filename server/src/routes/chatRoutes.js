import express from 'express';
import chatController from '../controllers/chatController.js';

const router = express.Router();

router.post('/chat', chatController.handleMessage);

export default router;
