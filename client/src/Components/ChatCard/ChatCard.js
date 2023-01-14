import { UserContext } from '../../Context/UserContext';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateMyChatsList } from '../../Utils/UserService';
import './ChatCard.css';

export default function ChatCard({ chat }) {
  const { activeUser } = useContext(UserContext);
  const [otherUser, setOtherUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    activeUser.userName == chat.activeUserName
      ? setOtherUser(chat.otherUser)
      : setOtherUser(chat.activeUserName);
  }, []);

  useEffect(() => {
    console.log(otherUser);
  }, [otherUser]);

  function handleStartAChatClick(otherUser) {
    console.log('otherUser to chat with:', otherUser);
    const sortedRoomId = [otherUser, activeUser.userName].sort().join('');
    console.log('sortedRoomId', sortedRoomId);
    updateMyChatsList(sortedRoomId);
    navigate(`/chat/${sortedRoomId}/${activeUser.userName}`);
  }

  if (chat.messages) {
    return (
      <div className='chat-card'>
        <div className='chat-card-name'>{otherUser}</div>
        <div className='chat-card-last-chat'>
          {chat.messages[chat.messages.length - 1].text}
        </div>
        <div className='chat-card-last-chat-time'>
          {chat.messages[chat.messages.length - 1].timestamp}
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
