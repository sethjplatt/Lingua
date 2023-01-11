const { collection, addDoc, getDocs } = require('firebase/firestore');
const db = require('../firebase');
const bcrypt = require('bcryptjs');

const addNewUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 8);
  const encryptedUser = { ...user, password: hashedPassword };
  try {
    const docRef = await addDoc(collection(db, 'users'), encryptedUser);
  } catch (err) {
    console.log(err);
  }
  return true;
};

const checkUserCredentials = async (user) => {
  let userInDb;
  const querySnapshot = await getDocs(collection(db, 'users'));
  const verifiedUser = await querySnapshot.docs.find(async (doc) => {
    if (doc.data().userName === user.userName) {
      userInDb = doc.data();
    }
  });
  return verifiedUser.data();
};

// const checkUserCredentials = async (user) => {
//   let userInDb;
//   const querySnapshot = await getDocs(collection(db, 'users'));
//   querySnapshot.forEach((doc) => {
//     if (doc.data().userName === user.userName) {
//       userInDb = doc.data();
//     }
//   });
//   if (userInDb) {
//     const passwordMatch = await bcrypt.compare(
//       user.password,
//       userInDb.password
//     );
//   }
// };

// const getUsersToChatWith = async (userName) => {
//   const snapshot1 = await get(child(dbRef, `users/${userName}`));
//   if (snapshot1.exists()) {
//     const user = snapshot1.val();
//     console.log(user);
//   }
// };

module.exports = { addNewUser, checkUserCredentials };
