const apiUrl = 'http://localhost:3001';

export const detectLanguage = async (text) => {
  const response = await fetch(`${apiUrl}/detect`, {
    method: 'POST',
    body: JSON.stringify({ text }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const body = await response.json();
  console.log('language in translate service:', body);
  return body.detectedLanguage;
};

export const translate = async (text, target) => {
  const response = await fetch(`${apiUrl}/translate`, {
    method: 'POST',
    body: JSON.stringify({ text, target }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const jsonResponse = await response.json();
  const translation = jsonResponse.translation;
  return translation;
};
