const serverUrl = 'http://localhost:3001';

export const joinRoom = async (roomData) => {
  const response = await fetch(`${serverUrl}/rooms`, {
    method: 'POST',
    body: JSON.stringify(roomData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 200) {
    const json = await response.json();
    return json;
  } else {
    return null;
  }
};

export const getMyChats = async (userName) => {
  const myChats = await fetch(serverUrl + '/mychats', {
    method: 'GET',
    credentials: 'include',
  });
  if (myChats.status === 200) {
    const jsonMyChats = await myChats.json();
    return jsonMyChats;
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
