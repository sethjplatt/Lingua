const userModels = require('../models/userModels');
const bcrypt = require('bcryptjs');

const signUp = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const hashedUser = { ...req.body, password: hashedPassword };
    console.log(hashedUser);
    const response = await userModels.signUp(hashedUser);
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
    const response = await userModels.logIn(req.body);
    console.log('req.body', req.body);
    console.log('response from model', response);

    if (response) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        response.password
      );
      if (passwordMatch) {
        req.session.sid = response.userName;
        console.log('passwords match in controller');
        res.sendStatus(200);
      } else {
        console.log('no match in controller');
        res.sendStatus(401);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const getUsersToChatWith = async (req, res) => {
  try {
    const userName = req.session.sid;
    console.log('userName aka req.session.sid in controller:', userName);
    const response = await userModels.getUsersToChatWith(userName);
    console.log('response in controller:', response);
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signUp, logIn, getUsersToChatWith };
