import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUsersToChatWith } from '../Utils/UserService';
export default function ConnectPage() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/chats');

  useEffect(() => {
    const fetchData = async () => {
      const otherUsers = await getUsersToChatWith();
      console.log('otherUsers in Connect Page client:', otherUsers);
    };
    fetchData();
  }, []);
  return (
    <>
      <div>this is the connect with other users page</div>
      <button onClick={handleClick}>view all of my chats</button>
    </>
  );
}
