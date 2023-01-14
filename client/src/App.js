import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import LogInForm from './Components/LogInForm/LogInForm';
import Chats from './Components/Chats/Chats';
import Connect from './Components/Connect/Connect';
import DashboardPage from './Components/DashboardPage/DashboardPage';
import ChatRoom from './Components/ChatRoom/ChatRoom';
import LandingPage from './Components/LandingPage/LandingPage';
import { fetchUser } from './Utils/UserService';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/chat/:roomId/:activeUserName' element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
