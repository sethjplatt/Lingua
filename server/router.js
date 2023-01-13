const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const roomController = require('./controllers/roomController');
const translateController = require('./controllers/translateController');

router.post('/signup', userController.signUp);
router.post('/login', userController.logIn);
router.get('/connect', userController.getUsersToChatWith);
router.get('/activeuser', userController.getActiveUser);

router.post('/rooms', roomController.joinRoom);
router.post('/messages', roomController.saveMessage);

router.get('/translate', translateController.translateText);

module.exports = router;
