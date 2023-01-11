const { ref, set, get, child } = require('firebase/database');
const database = require('../firebase');
const bcrypt = require('bcryptjs');

const dbRef = ref(database);

const addNewUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 8);
  const encryptedUser = { ...user, password: hashedPassword };
  set(ref(database, 'users/' + user.userName), encryptedUser);
  return true;
};

const checkUserCredentials = async (user) => {
  console.log(user);
  const snapshot = await get(child(dbRef, `users/${user.userName}`));
  if (snapshot.exists()) {
    const dbUser = snapshot.val();
    const passwordMatch = await bcrypt.compare(user.password, dbUser.password);
    if (passwordMatch) {
      console.log('passwords match');
      return user;
    }
  } else {
    return false;
  }
};

const getUsersToChatWith = async (userName) => {
  const snapshot1 = await get(child(dbRef, `users/${userName}`));
  if (snapshot1.exists()) {
    const user = snapshot1.val();
    console.log(user);
  }
};

module.exports = { addNewUser, checkUserCredentials, getUsersToChatWith };
