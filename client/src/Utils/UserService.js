const apiUrl = 'http://localhost:3001';

export const signUpService = async (user) => {
  console.log('in signUpService Client, user:', user);
  const response = await fetch(apiUrl + '/signup', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  console.log('response in signUpService', response);
  return response.ok;
};

export const logInService = async (user) => {
  const response = await fetch(apiUrl + '/login', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  console.log('response in logInService:', response);
  return response.ok;
};

export const setProfileInfo = async (user) => {
  const response = await fetch(apiUrl + '/profileinfo', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return response;
};

export const getUsersToChatWith = async () => {
  const response = await fetch(apiUrl + '/connect', {
    method: 'GET',
    credentials: 'include',
  });
  return response;
};
