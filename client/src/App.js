import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import LogInForm from './Components/LogInForm/LogInForm';
import ChatsPage from './Components/ChatsPage/ChatsPage';
import ConnectPage from './Components/ConnectPage/ConnectPage';
import { fetchUser } from './Utils/UserService';
import ChatRoom from './Components/ChatRoom/ChatRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUpForm />} />
        <Route path='/login' element={<LogInForm />} />
        <Route path='/chats' element={<ChatsPage />} />
        <Route path='/connect' element={<ConnectPage />} />
        <Route path='/chat/:roomId/:activeUserName' element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
