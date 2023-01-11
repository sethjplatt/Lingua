const userModel = require('../models/userModel');

const signUp = async (req, res) => {
  try {
    const response = await userModel.addNewUser(req.body);
    if (response) {
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
      res.sendStatus(201);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signUp, logIn };
