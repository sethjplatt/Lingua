import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Dashboard from './Components/Dashboard';
import ChatsPage from './Components/ChatsPage';
import ConnectPage from './Components/ConnectPage';
import { fetchUser } from './Utils/UserService';
// import { UserContext } from './Context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/chats' element={<ChatsPage />} />
        <Route path='/connect' element={<ConnectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
