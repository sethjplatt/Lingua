const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate();

const text = 'Hello, world!';
const target = 'es';

async function translateText() {
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log('Translations:');
  translations.forEach((translation, i) => {
    console.log(`${text[i]} => (${target}) ${translation}`);
  });
}

translateText();
