import express from 'express';
import userController from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

// get all users
router.get('/',authMiddleware, userController.getUsersForSideBar);

export default router;