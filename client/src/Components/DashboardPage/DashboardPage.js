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

      const chats = await getMyChats(user.userName);
      setMyChats(chats);

      const compatibles = await getCompatibleUsers();

      const newCompatibles = [];
      if (!chats.length) {
        setCompatibleUsers(compatibles);
      } else {
        compatibles.forEach((user) => {
          for (let i = 0; i < chats.length; i++) {
            if (
              user.userName === chats[i].activeUserName ||
              user.userName === chats[i].otherUser
            ) {
              break;
            }
            if (!chats[i + 1]) {
              newCompatibles.push(user);
            }
          }
        });
        setCompatibleUsers(newCompatibles);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const chatsCopy = myChats.slice(0);
    const compatiblesCopy = compatibleUsers.slice(0);
    const newCompatibles = [];
    if (myChats.length) {
      compatiblesCopy.forEach((user) => {
        chatsCopy.forEach((chat) => {
          if (
            user.userName !== chat.activeUserName &&
            user.userName !== chat.otherUser
          ) {
            newCompatibles.push(user);
          }
        });
      });
      setCompatibleUsers(newCompatibles);
    }
  }, [myChats.length]);

  return (
    <UserContext.Provider
      value={{ activeUser, myChats, compatibleUsers, setCompatibleUsers }}
    >
      <div className='header'>Lingua</div>
      <div
        className='dash-items-container'
        style={{
          backgroundImage: `url(/landmarks-dash.jpg)`,
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
