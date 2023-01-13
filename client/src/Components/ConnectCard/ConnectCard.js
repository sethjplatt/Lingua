import { useNavigate } from 'react-router-dom';

export default function ConnectCard({ otherUser, activeUser }) {
  const navigate = useNavigate();

  function handleStartAChatClick(otherUser) {
    console.log('otherUser to chat with:', otherUser);
    const sortedRoomId = [otherUser.userName, activeUser.userName]
      .sort()
      .join('');
    console.log('sortedRoomId', sortedRoomId);
    navigate(`/chat/${sortedRoomId}/${activeUser.userName}`);
  }

  return (
    <div className='connect-card' key={otherUser.userName}>
      <div className='user-name'>{otherUser.userName}</div>
      <div className='connect-info'>
        speaks {otherUser.nativeLanguage} and is learning{' '}
        {otherUser.learnLanguage}
      </div>
      <button
        className='start-chat'
        value={otherUser}
        onClick={() => handleStartAChatClick(otherUser)}
      >
        Start A Chat
      </button>
    </div>
  );
}
