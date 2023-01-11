const userModel = require('../models/userModel');

const signUp = async (req, res) => {
  try {
    const response = await userModel.addNewUser(req.body);
    if (response) {
      req.session.sid = req.body.userName;
      console.log(req.session);
      res.sendStatus(201);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log(err);
  }
};

const logIn = async (req, res) => {
  try {
    console.log('login attempt:', req.body);
    const response = await userModel.checkUserCredentials(req.body);
    if (response) {
      console.log(response);
      req.session.sid = response.userName;
      res.sendStatus(201);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log(err);
  }
};

const getUsersToChatWith = async (req, res) => {
  try {
    const userName = req.session.sid;
    console.log('userName aka req.session.sid:', userName);
    const response = await userModel.getUsersToChatWith(userName);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signUp, logIn, getUsersToChatWith };
