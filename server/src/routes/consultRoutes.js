import express from 'express';
import consultController from '../controllers/consultController.js';

const router = express.Router();

router.post('/consult', consultController.create);
router.get('/consultations', consultController.getAll);

export default router;
