import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Dashboard from './Components/Dashboard';
import ChatsPage from './Components/ChatsPage';
import ConnectPage from './Components/ConnectPage';
import { fetchUser } from './Utils/UserService';
import ChatRoom from './Components/ChatRoom/ChatRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/chats' element={<ChatsPage />} />
        <Route path='/connect' element={<ConnectPage />} />
        <Route path='/chat/:roomId/:activeUserName' element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
