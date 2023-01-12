import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getActiveUser, getUsersToChatWith } from '../Utils/UserService';

export default function ConnectPage() {
  const [activeUser, setActiveUser] = useState({});
  const [compatibleUsers, setCompatibleUsers] = useState([]);
  const navigate = useNavigate();
  function handleStartAChatClick(otherUser) {
    console.log('user to chat with:', otherUser);
    const sortedRoomId = [otherUser.userName, activeUser.userName]
      .sort()
      .join('');
    console.log('sortedRoomId', sortedRoomId);
    navigate(`/chat/${sortedRoomId}/${activeUser.userName}`);
  } //roomId = otherUser.username + activeUser.userName

  useEffect(() => {
    const fetchData = async () => {
      const user = await getActiveUser();
      setActiveUser(user);
      const otherUsers = await getUsersToChatWith();
      const jsonOtherUsers = await otherUsers.json();
      console.log('otherUsers in Connect Page client:', jsonOtherUsers);
      setCompatibleUsers(jsonOtherUsers);
    };
    fetchData();
  }, []);

  const users = compatibleUsers.map((user) => {
    return (
      <div key={user.userName}>
        <h2>{user.userName}</h2>
        <h4>
          speaks {user.nativeLanguage} and is learning {user.learnLanguage}
        </h4>
        <button value={user} onClick={() => handleStartAChatClick(user)}>
          Start A Chat
        </button>
      </div>
    );
  });

  return (
    <>
      <div>
        Here are some other users from around the world you can chat with!
      </div>
      {users}
      <button onClick={() => navigate('/chats')}>view all of my chats</button>
    </>
  );
}
