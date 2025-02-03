import express from 'express';
import AuthController from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/signup', AuthController.signup);

router.post('/login', AuthController.login);

router.post('/logout', AuthController.logout);

// router.get('/verify/:token', AuthController.verify);

// router.get('/resend-verification', AuthController.resendVerification);

// router.get('/forgot-password', AuthController.forgotPassword);

// router.post('/forgot-password', AuthController.forgotPassword);

// router.get('/reset-password/:token', AuthController.resetPassword);

// router.post('/reset-password/:token', AuthController.resetPassword);

// router.get('/change-password', AuthController.changePassword);

// router.post('/change-password', AuthController.changePassword);

// router.get('/profile', AuthController.profile);

// router.put('/profile', AuthController.updateProfile);

// router.delete('/profile', AuthController.deleteProfile);

// router.get('/verify-email/:token', AuthController.verifyEmail);

// router.get('/resend-verification-email', AuthController.resendVerificationEmail);

// router.get('/verify-phone/:token', AuthController.verifyPhone);

// router.get('/resend-verification-phone', AuthController.resendVerificationPhone);

// router.get('/verify-phone-code/:token', AuthController.verifyPhoneCode);

// router.post('/verify-phone-code/:token', AuthController.verifyPhoneCode);

// router.get('/resend-verification-phone-code', AuthController.resendVerificationPhoneCode);

// router.get('/verify-two-factor-authentication', AuthController.verifyTwoFactorAuthentication);

// router.post('/verify-two-factor-authentication', AuthController.verifyTwoFactorAuthentication);

// router.get('/enable-two-factor-authentication', AuthController.enableTwoFactorAuthentication);

// router.post('/enable-two-factor-authentication', AuthController.enableTwoFactorAuthentication);

// router.get('/disable-two-factor-authentication', AuthController.disableTwoFactorAuthentication);

// router.post('/disable-two-factor-authentication', AuthController.disableTwoFactorAuthentication);

export default router;
