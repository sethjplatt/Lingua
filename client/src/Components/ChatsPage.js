import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getActiveUser } from '../Utils/UserService';

export default function ChatsPage() {
  const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const user = await getActiveUser();
      setActiveUser(user);
    };
    fetchData();
  }, []);
  const handleClick = () => navigate('/connect');

  return (
    <>
      <div>Welcome back {activeUser?.userName}! Here are your open chats!</div>
      <button onClick={handleClick}>Connect with other users</button>
    </>
  );
}
