const apiUrl = 'http://localhost:3001';

export const joinRoom = async (roomData) => {
  const response = await fetch(`http://localhost:3001/rooms`, {
    method: 'POST',
    body: JSON.stringify(roomData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status == 200) {
    const json = await response.json();
  }
};

export const saveMessageToDb = async (messageData) => {
  const response = await fetch(`http://localhost:3001/messages`, {
    method: 'POST',
    body: JSON.stringify(messageData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
