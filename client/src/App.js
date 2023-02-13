import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './Components/DashboardPage/DashboardPage';
import ChatRoom from './Components/ChatRoom/ChatRoom';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/chat/:roomId/:activeUserName' element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
