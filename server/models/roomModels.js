const client = require('./index');
const db = client.db('test').collection('rooms');
const userDb = client.db('test').collection('users');

async function joinRoom(roomData) {
  const dbResponse = await db.findOne({ roomId: roomData.roomId });
  console.log('dbResponse:', dbResponse);
  if (!dbResponse) {
    console.log('room data:', roomData);
    const roomCreater = await userDb.findOne({
      userName: roomData.activeUserName,
    });
    const roomLanguages = [
      roomCreater.nativeLanguage,
      roomCreater.learnLanguage,
    ];
    console.log('roomLanguages:', roomLanguages);

    const created = await db.insertOne({
      ...roomData,
      roomLanguages,
      messages: [],
    });
    // console.log('created:', created);
  }
  return dbResponse;
}

async function saveMessage(messageData) {
  console.log('message data in model:', messageData);
  const dbResponse = await db.updateOne(
    { roomId: messageData.room },
    { $push: { messages: messageData } }
  );
}

module.exports = { joinRoom, saveMessage };
