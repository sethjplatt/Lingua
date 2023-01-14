const client = require('./index');
const db = client.db('test').collection('users');

async function signUp(user) {
  user.myRooms = [];
  const res = await db.insertOne(user);
  return res;
}

async function logIn(attempt) {
  const user = await db.findOne({ userName: attempt.userName });
  return user;
}

async function getActiveUser(userName) {
  const activeUser = await db.findOne(
    { userName: userName },
    { projection: { _id: 0, password: 0 } }
  );
  return activeUser;
}

async function getCompatibleUsers(userName) {
  const userMakingRequest = await db.findOne({ userName: userName });
  if (userMakingRequest) {
    const compatibleUsers = await db
      .find(
        {
          nativeLanguage: userMakingRequest.learnLanguage,
          learnLanguage: userMakingRequest.nativeLanguage,
        },
        { projection: { _id: 0, password: 0 } }
      )
      .toArray();
    if (compatibleUsers) {
      return compatibleUsers;
    } else {
      return null;
    }
  }
}

async function updateChats(user, roomId) {
  console.log('in userModel updateChats, user, roomId:', user, roomId);
  const secondUser = roomId.replace(user, '');
  console.log('secondUser', secondUser);
  const dbResponse = await db.updateOne(
    { userName: user },
    { $push: { myRooms: roomId } }
  );
  const dbResponse2 = await db.updateOne(
    { userName: secondUser },
    { $push: { myRooms: roomId } }
  );
  console.log(dbResponse);
}
module.exports = {
  signUp,
  logIn,
  getCompatibleUsers,
  getActiveUser,
  updateChats,
};
