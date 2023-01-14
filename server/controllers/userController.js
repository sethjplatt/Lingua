const userModels = require('../models/userModels');
const bcrypt = require('bcryptjs');

const signUp = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const hashedUser = { ...req.body, password: hashedPassword };
    // console.log(hashedUser);
    const response = await userModels.signUp(hashedUser);
    if (response) {
      req.session.sid = req.body.userName;
      const { firstName, lastName, userName, nativeLanguage, learnLanguage } =
        response;
      const cleanResponse = {
        firstName,
        lastName,
        userName,
        nativeLanguage,
        learnLanguage,
      };
      // console.log('cleanResponse:', cleanResponse);
      res.status(201).send(cleanResponse);
    }
  } catch (err) {
    console.log(err);
  }
};

const logIn = async (req, res) => {
  try {
    const response = await userModels.logIn(req.body);

    if (response) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        response.password
      );
      if (passwordMatch) {
        req.session.sid = response.userName;
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

const cleanResponse = (user) => {
  const { userName, learnLanguage, nativeLanguage } = user;
  const cleanUser = {
    ...user,
    _id: null,
    password: null,
  };
  return cleanUser;
};

const getActiveUser = async (req, res) => {
  try {
    const userName = req.session.sid;
    const response = await userModels.getActiveUser(userName);
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
};

const getCompatibleUsers = async (req, res) => {
  try {
    const userName = req.session.sid;
    const response = await userModels.getCompatibleUsers(userName);
    if (response) {
      res.status(200).send(response);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err);
  }
};

const updateMyChats = async (req, res) => {
  try {
    const { roomId } = req.body;
    const userName = req.session.sid;
    const done = await userModels.updateMyChats(userName, roomId);
  } catch (err) {}
};

module.exports = {
  signUp,
  logIn,
  getCompatibleUsers,
  getActiveUser,
  updateMyChats,
};
