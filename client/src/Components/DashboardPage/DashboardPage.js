import { getActiveUser, getCompatibleUsers } from '../../Utils/UserService';
import { getMyChats } from '../../Utils/ChatService';
import { useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import Profile from '../Profile/Profile';
import Chats from '../Chats/Chats';
import Connect from '../Connect/Connect';
import './DashboardPage.css';

export default function DashboardPage() {
  const [activeUser, setActiveUser] = useState({});
  const [myChats, setMyChats] = useState([]);
  const [compatibleUsers, setCompatibleUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getActiveUser();
      setActiveUser(user);

      const compatibles = await getCompatibleUsers();
      setCompatibleUsers(compatibles);

      const chats = await getMyChats(user.userName);
      setMyChats(chats);
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ activeUser, myChats, compatibleUsers }}>
      <div className='dash-header'>Header</div>
      <div
        className='dash-items-container'
        style={{
          backgroundImage: `url(/landmarks-short.jpg)`,
        }}
      >
        <div className='profile-and-chats-container'>
          <Profile />
          <div id='chats' className='component'>
            <Chats />
          </div>
        </div>
        <div id='connect' className='component'>
          <Connect />
        </div>
      </div>
    </UserContext.Provider>
  );
}
