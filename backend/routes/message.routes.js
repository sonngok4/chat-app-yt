import express from 'express';
const router = express.Router();

import messageController from '../controllers/message.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

router.post('/send/:id', authMiddleware, messageController.sendMessage);
router.get('/:id', authMiddleware, messageController.getMessages);
// router.get('/:id', getMessage);
// router.put('/:id', updateMessage);
// router.delete('/:id', deleteMessage);

export default router;
