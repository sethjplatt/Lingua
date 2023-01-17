const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router');
const session = require('express-session');

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST'],
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24, httpOnly: false },
  })
);
app.use(router);

const port = process.env.PORT || 3001;

const server = require('http').Server(app);
const io = require('socket.io')(server, { cors: corsConfig });

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

io.on('connection', (socket) => {
  console.log('A user connected, socket.id:', socket.id);

  socket.on('join', (room) => {
    console.log('a user joined:', room);
    socket.join(room.room);
  });
  socket.on('message', (data) => {
    console.log('data object:', data);
    io.to(data.room).emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  socket.on('callUser', (data) => {
    io.to(data.room).emit('callUser', {
      signal: data.signalData,
      from: data.from,
      name: data.name,
    });
  });

  socket.on('answerCall', (data) => {
    io.to(data.room).emit('callAccepted', data.signal);
  });
});
