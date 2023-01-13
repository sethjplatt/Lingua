const serverUrl = 'http://localhost:3001';

export const joinRoom = async (roomData) => {
  const response = await fetch(`${serverUrl}/rooms`, {
    method: 'POST',
    body: JSON.stringify(roomData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status == 200) {
    const json = await response.json();
    console.log(json);
    return json;
  } else {
    return null;
  }
};

export const saveMessageToDb = async (messageData) => {
  fetch(`${serverUrl}/messages`, {
    method: 'POST',
    body: JSON.stringify(messageData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
