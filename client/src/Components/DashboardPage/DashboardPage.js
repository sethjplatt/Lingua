import {
  getMyChats,
  getActiveUser,
  getCompatibleUsers,
} from '../../Utils/UserService';
import { useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import Chats from '../Chats/Chats';

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
      <>
        <div id='chats-component'>
          <Chats />
        </div>
        <div id='connect-component'></div>
      </>
    </UserContext.Provider>
  );
}
