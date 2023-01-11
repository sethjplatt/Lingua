const { ref, set, get, child } = require('firebase/database');
const database = require('../firebase');
const bcrypt = require('bcryptjs');

const addNewUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 8);
  const encryptedUser = { ...user, password: hashedPassword };
  set(ref(database, 'users/' + user.userName), encryptedUser);
  return true;
};

const checkUserCredentials = async (user) => {
  const snapshot = await get(child(database, 'users/' + user.userName));
  if (snapshot.exists()) {
    const data = snapshot.val();
    if (data.password && bcrypt.compareSync(user.password, data.password)) {
      return true;
    }
  }
};

module.exports = { addNewUser, checkUserCredentials };
