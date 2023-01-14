const client = require('./index');
const db = client.db('test').collection('rooms');
const userDb = client.db('test').collection('users');

async function joinRoom(roomData) {
  const dbResponse = await db.findOne({ roomId: roomData.roomId });
  if (!dbResponse) {
    const roomCreater = await userDb.findOne({
      userName: roomData.activeUserName,
    });
    const roomLanguages = [
      roomCreater.nativeLanguage,
      roomCreater.learnLanguage,
    ];

    const created = await db.insertOne({
      ...roomData,
      roomLanguages,
      messages: [],
    });
  }
  return dbResponse;
}

async function saveMessage(messageData) {
  const dbResponse = await db.updateOne(
    { roomId: messageData.room },
    { $push: { messages: messageData } }
  );
}

async function getMyChats(userName) {
  const dbResponse = await db
    .find({
      $or: [{ activeUserName: userName }, { otherUser: userName }],
    })
    .toArray();
  return dbResponse;
}

module.exports = { joinRoom, saveMessage, getMyChats };
