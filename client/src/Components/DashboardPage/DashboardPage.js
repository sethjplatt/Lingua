import { getActiveUser, getCompatibleUsers } from '../../Utils/UserService';
import { getMyChats } from '../../Utils/ChatService';
import { useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
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
      console.log('user in dashboard fetch:', user);
      setActiveUser(user);

      const compatibles = await getCompatibleUsers();
      console.log('compatibles in dashboard fetch:', compatibles);
      setCompatibleUsers(compatibles);

      const chats = await getMyChats(user.userName);
      console.log('chats in dashboard fetch:', chats);
      setMyChats(chats);
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ activeUser, myChats, compatibleUsers }}>
      <div className='dashboard-container'>
        <div id='chats' className='component'>
          <Chats />
        </div>
        <div id='connect' className='component'>
          <Connect />
        </div>
      </div>
    </UserContext.Provider>
  );
}
