const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router');
const session = require('express-session');

const corsConfig = { origin: 'http://localhost:3000', credentials: true };

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
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
