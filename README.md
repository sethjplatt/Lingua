<p align="center">
  <img src="client/screenshots/Logo.JPG" height="150px" width="600px"/>
</p>

Lingua is a language learning application that aims to make the language learning process stress-free, fun, and social!

## Screenshots

<p align="center">
  <img src="client/screenshots/chatroom.JPG" height='400px'/>
  <img src="client/screenshots/Dashboard.JPG" />
  <img src="client/screenshots/Landing.JPG"/>

</p>

## Getting started

To run this project on your machine, aside from the basics of git, npm, node, and react, you will need to sign up for a google cloud account and obtain API keys for their translation and language detection API's (their free tier allows up to 500,000 characters/month). Google has great documentation and the process should take about 15-20 minutes. Start here: https://cloud.google.com/translation-hub/docs/admin-setup

## Installation

1. Clone this repo

   ```bash
     git clone https://github.com/sethjplatt/Lingua.git
   ```

2. Install dependencies.

   ```bash
   cd server
   npm install
   cd ..
   cd client
   npm install
   ```

3. Server Environment Variables:

   DB_CONNECTION_STRING

   GOOGLE_APPLICATION_CREDENTIALS

4. While in the server folder, start the Lingua server development environment:

   ```bash
   npm run dev
   ```

5. Open another terminal window and cd into client:

   ```bash
     npm start
   ```

6. Create an account!

7. To view the full functionality of the app, I have included a database seed script with 20 mock users.
   ```bash
   node dbseed.js
   ```

Note: If you'd like to edit the default seed users, just send one mock user to chatgpt and ask for X amount more with custom specifications, like language preferences.
Note: seeding the database will erase all users first, effectively resetting the database.

## Tech Stack

FRONTEND:

- [React](https://github.com/facebook/react/)
- [Socket.io](https://socket.io/docs/v4/client-installation/)
- [Bare CSS 🤘](https://developer.mozilla.org/en-US/docs/Web/CSS)

BACKEND:

- [MongoDB](https://github.com/mongodb/mongo)
- [NodeJS](https://nodejs.org/en/docs/)
- [Express](https://github.com/expressjs/express)
- [Express Session](https://github.com/expressjs/session)
- [Google Language Detection/Translation](https://cloud.google.com/translate/)

## Author

Seth Platt- [Github](https://github.com/sethjplatt)
