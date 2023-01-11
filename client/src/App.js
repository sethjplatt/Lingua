import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import { fetchUser } from './Utils/UserService';
import Dashboard from './Components/Dashboard';
// import { UserContext } from './Context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
