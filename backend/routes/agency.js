import express from 'express';
import cors from 'cors';
import * as controller from '../controller/agency.js';
import { authenticateAgencyToken } from '../config/authMiddleware.js'

const router = express.Router();

const corsOptions = {
    origin: 'http://localhost:3000',
    allowedHeaders: ['Authorization', 'Content-Type'],
  };
  
router.use(cors(corsOptions));

router.get('/', authenticateAgencyToken, controller.queue);
router.post('/confirm-supplies', authenticateAgencyToken, controller.cofirm_supplies);
router.post('/reject-request', authenticateAgencyToken, controller.reject_reward);
router.get('/history', authenticateAgencyToken, controller.history);
router.post('/add-reward', authenticateAgencyToken, controller.add_reward);
router.get('/rewards', authenticateAgencyToken, controller.rewards);

export default router;