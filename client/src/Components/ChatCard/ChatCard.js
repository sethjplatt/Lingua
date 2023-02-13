import { UserContext } from '../../Context/UserContext';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './ChatCard.css';

export default function ChatCard({ chat }) {
  const { activeUser } = useContext(UserContext);
  const [otherUser, setOtherUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    activeUser.userName === chat.activeUserName
      ? setOtherUser(chat.otherUser)
      : setOtherUser(chat.activeUserName);
  }, []);

  async function handleStartAChatClick(otherUser) {
    const sortedRoomId = [otherUser, activeUser.userName].sort().join('');
    navigate(`/chat/${sortedRoomId}/${activeUser.userName}`);
  }

  if (chat.messages) {
    const timestamp = chat.messages[chat.messages.length - 1].timestamp;
    const hhmm = timestamp.match(/(\d?\d:\d{2})/);
    const ddmmyyyy = timestamp.match(/\d?\d\/\d?\d\/\d{4}/);

    return (
      <div className='chat-card'>
        <div className='card-name'>{otherUser}</div>
        <div className='chat-card-last-chat'>
          {chat.messages[chat.messages.length - 1].text.slice(0, 15) + '...'}
        </div>
        <div className='timestamp'>
          <div id='hhmm'>{hhmm[0]}</div>
          <div id='ddmmyyyy'>{ddmmyyyy[0]}</div>
        </div>
        <button
          className='continue-chat'
          value={otherUser}
          onClick={() => handleStartAChatClick(otherUser)}
        >
          >
        </button>
      </div>
    );
  }
}
