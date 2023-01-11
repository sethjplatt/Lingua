import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsersToChatWith } from '../Utils/UserService';

export default function ConnectPage() {
  const [compatibleUsers, setCompatibleUsers] = useState([]);
  const navigate = useNavigate();
  function handleStartAChatClick(user) {
    console.log('start a chat with:', user);
  }

  useEffect(() => {
    const fetchData = async () => {
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
