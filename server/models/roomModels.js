const client = require('./index');
const db = client.db('test').collection('rooms');

async function joinRoom(roomData) {
  // console.log('room data:', roomData);
  const dbResponse = await db.findOne({ roomId: roomData.roomId });
  // console.log('dbResponse:', dbResponse);
  if (!dbResponse) {
    const created = await db.insertOne({ ...roomData, messages: [] });
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
