const translateModels = require('../models/translateModels');

const translateText = async (req, res) => {
  try {
    console.log('translate controller req.body:', req.body);
    let translation = await translateModels.translateText(
      req.body.text,
      req.body.target
    );
    console.log('translation ready to send from controller:', translation);
    res.status(200).send({ translation });
  } catch (err) {
    console.log(err);
  }
};

const detectLanguage = async (req, res) => {
  try {
    let detectedLanguage = await translateModels.detectLanguage(req.body.text);
    res.status(200).send({ detectedLanguage });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { translateText, detectLanguage };
