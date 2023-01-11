const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

router.post('/signup', userController.signUp);
router.post('/login', userController.logIn);
router.get('/connect', userController.getUsersToChatWith);

module.exports = router;
