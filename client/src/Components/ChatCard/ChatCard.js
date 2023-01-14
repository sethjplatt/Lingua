import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';
import './ChatCard.css';

export default function ChatCard({ chat }) {
  const { activeUser } = useContext(UserContext);

  if (chat.messages) {
    return (
      <div className='chat-card'>
        <div className='chat-card-name'>
          {activeUser.userName == chat.activeUserName
            ? chat.otherUser
            : chat.activeUserName}
        </div>
        <div className='chat-card-last-chat'>
          {chat.messages[chat.messages.length - 1].text}
        </div>
        <div className='chat-card-last-chat-time'>
          {chat.messages[chat.messages.length - 1].timestamp}
        </div>
      </div>
    );
  }
}
