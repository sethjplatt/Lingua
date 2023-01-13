const translateModels = require('../models/translateModels');

const translateText = async (req, res) => {
  try {
    translateModels.translateText(req.body);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { translateText };
