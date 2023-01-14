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
    // console.log('compatibleuser:', compatibleUsers);
    if (compatibleUsers) {
      return compatibleUsers;
    } else {
      return null;
    }
  }
}

async function updateMyChats(userName, roomId) {
  const dbResponse = await db.updateOne(
    { userName: userName },
    { $push: { myRooms: roomId } }
  );
  console.log(dbResponse);
}
module.exports = { signUp, logIn, getCompatibleUsers, getActiveUser };
