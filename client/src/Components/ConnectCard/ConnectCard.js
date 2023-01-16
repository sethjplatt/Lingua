import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';
import { updateChatsList } from '../../Utils/UserService';
import './ConnectCard.css';

export default function ConnectCard({ otherUser, activeUser }) {
  const { setCompatibleUsers } = useContext(UserContext);
  const navigate = useNavigate();

  function handleStartAChatClick(otherUser) {
    const sortedRoomId = [otherUser.userName, activeUser.userName]
      .sort()
      .join('');
    const updateData = { otherUser, sortedRoomId };
    updateChatsList(updateData);

    setCompatibleUsers((prev) => {
      const filtered = prev.filter((user) => {
        return user.userName !== otherUser.userName;
      });
      console.log('filtered', filtered);
      return filtered;
    });

    navigate(`/chat/${sortedRoomId}/${activeUser.userName}`);
  }

  return (
    <div className='connect-card' key={otherUser.userName}>
      <div className='connect-item card-name'>{otherUser.userName}</div>
      <div className='connect-item connect-info'>
        speaks {otherUser.nativeLanguage} and is learning{' '}
        {otherUser.learnLanguage}
      </div>
      <button
        className='connect-item start-chat'
        value={otherUser}
        onClick={() => handleStartAChatClick(otherUser)}
      >
        Start A Chat
      </button>
    </div>
  );
}
