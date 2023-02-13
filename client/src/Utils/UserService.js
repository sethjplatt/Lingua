const serverUrl = 'http://localhost:3001';

export const signUpService = async (user) => {
  const response = await fetch(serverUrl + '/signup', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const json = await response.json();
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
  return jsonActiveUser;
};

export const getCompatibleUsers = async () => {
  const compatibleUsers = await fetch(serverUrl + '/connect', {
    method: 'GET',
    credentials: 'include',
  });
  if (compatibleUsers) {
    const jsonCompatibleUsers = await compatibleUsers.json();
    return jsonCompatibleUsers;
  } else {
    return null;
  }
};

export const getUserByUserName = async (userName) => {
  const user = await fetch(serverUrl + '/userbyusername', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userName),
  });
  const jsonUser = await user.json();
  return jsonUser;
};

export const setProfileInfo = async (info) => {
  const user = await fetch(serverUrl + '/setprofileinfo', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(info),
  });
  const jsonUser = await user.json();
  return jsonUser;
};
