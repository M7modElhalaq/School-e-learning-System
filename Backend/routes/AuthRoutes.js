const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/signup', authController.auth_singup);

router.get('/login', authController.auth_login);

router.post('/signup', authController.auth_signup_post);

router.post('/login', authController.auth_login_post);

router.get('/logout', authController.auth_logout);

module.exports = router;