import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';

export default function ChatCard({ chat }) {
  const { activeUser } = useContext(UserContext);

  console.log('myChatCards map, chat:', chat.messages);
  if (chat.messages) {
    console.log('there are chat messages');
    return (
      <div className='message-card'>
        <div className='message-card-name'>
          {activeUser.userName == chat.activeUserName
            ? chat.otherUser
            : chat.activeUserName}
        </div>
        <div className='message-card-last-chat'>
          {chat.messages[chat.messages.length - 1].text}
        </div>
        <div className='message-card-last-chat-time'>
          {chat.messages[chat.messages.length - 1].timestamp}
        </div>
      </div>
    );
  }
}
