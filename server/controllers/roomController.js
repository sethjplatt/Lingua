const roomModels = require('../models/roomModels');

const joinRoom = async (req, res) => {
  try {
    const modelResponse = await roomModels.joinRoom(req.body);
    if (modelResponse) {
      res.status(200).send(modelResponse.messages);
    } else {
      res.sendStatus(201);
    }
  } catch (err) {
    console.log(err);
  }
};

const saveMessage = async (req, res) => {
  try {
    const modelResponse = await roomModels.saveMessage(req.body);
  } catch (err) {
    console.log(err);
  }
};

const getMyChats = async (req, res) => {
  try {
    const userName = req.session.sid;
    const modelResponse = await roomModels.getMyChats(userName);
    if (modelResponse) {
      res.status(200).send(modelResponse);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { joinRoom, saveMessage, getMyChats };
