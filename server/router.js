const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const roomController = require('./controllers/roomController');
const translateController = require('./controllers/translateController');

router.post('/signup', userController.signUp);
router.post('/login', userController.logIn);
router.get('/connect', userController.getCompatibleUsers);
router.get('/activeuser', userController.getActiveUser);
router.post('/userbyusername', userController.getUserByUserName);

router.get('/mychats', roomController.getMyChats);
router.post('/rooms', roomController.joinRoom);
router.post('/messages', roomController.saveMessage);

router.post('/translate', translateController.translateText);
router.post('/detect', translateController.detectLanguage);

module.exports = router;
