import { useNavigate } from 'react-router-dom';
export default function ChatsPage() {
  const navigate = useNavigate();

  const handleClick = () => navigate('/connect');
  return (
    <>
      <div>this is the chat page</div>
      <button onClick={handleClick}>Connect with other users</button>
    </>
  );
}
