const express = require('express')
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', authController.protect, authController.loggedIn);

router.post('/signup', authController.signup);
router.post('/signup/confirm', authController.signupConfirm);
router.post('/login/:choice', authController.login);
router.get('/logout', authController.logout);
router.post('/forgotpassword', authController.forgotPassword);
router.patch('/resetpassword/:token', authController.resetPassword);

router.get('/data', authController.protect, userController.loadUserData);
router.patch('/account', authController.protect, userController.updateUserInfo);
router.delete('/account', authController.protect, authController.deleteAccount);

module.exports = router