const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database');

const firebaseConfig = {
  apiKey: 'AIzaSyAawKBb5_K-gfi1khqFSUH3zIC0y_pv5hU',
  authDomain: 'lingua-d09cf.firebaseapp.com',
  databaseURL:
    'https://lingua-d09cf-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'lingua-d09cf',
  storageBucket: 'lingua-d09cf.appspot.com',
  messagingSenderId: '447618465388',
  appId: '1:447618465388:web:3870b571d519fc3f70e249',
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

module.exports = database;
