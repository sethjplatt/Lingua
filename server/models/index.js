const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.DB_CONNECTION_STRING);

(async function main() {
  try {
    await client.connect();
    console.log('connected to mongoDB');
  } catch (err) {
    console.log(err);
  }
})();

module.exports = client;
