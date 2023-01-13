const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate();

// const text = 'Hello, world!';
// const target = 'es';

async function translateText(text, target) {
  const data = await translate.translate(text, target);
  const translation = data[0];
  console.log('Translation:', translation);
  return translation;
}

async function detectLanguage(text) {
  const data = await translate.detect(text);
  const detectedLanguage = data[0].language;
  // console.log('data:', data);
  console.log('Detected language:', detectedLanguage);
  return detectedLanguage;
}

module.exports = { translateText, detectLanguage };
