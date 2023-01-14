const serverUrl = 'http://localhost:3001';

export const signUpService = async (user) => {
  console.log('in signUpService Client, user:', user);
  const response = await fetch(serverUrl + '/signup', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const json = await response.json();
  console.log('response in signUpService', json);
  return json;
};

export const logInService = async (user) => {
  const response = await fetch(serverUrl + '/login', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  return response;
};

export const getActiveUser = async () => {
  const activeUser = await fetch(serverUrl + '/activeuser', {
    method: 'GET',
    credentials: 'include',
  });
  const jsonActiveUser = await activeUser.json();
  console.log('activeUser in userservice', jsonActiveUser);
  return jsonActiveUser;
};

export const getMyChats = async (userName) => {
  const myChats = await fetch(serverUrl + '/mychats', {
    method: 'GET',
    credentials: 'include',
  });
  if (myChats.status === 200) {
    const jsonMyChats = await myChats.json();
    console.log('active chats UserService:', jsonMyChats);
    return jsonMyChats;
  } else {
    return null;
  }
};

export const getCompatibleUsers = async () => {
  const response = await fetch(serverUrl + '/connect', {
    method: 'GET',
    credentials: 'include',
  });
  console.log('getCompatibleUsers', response);
  return response;
};
