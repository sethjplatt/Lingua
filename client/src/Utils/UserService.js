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

export const getUsersToChatWith = async () => {
  const response = await fetch(serverUrl + '/connect', {
    method: 'GET',
    credentials: 'include',
  });
  return response;
};
