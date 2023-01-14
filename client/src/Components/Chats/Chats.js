import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { getActiveUser, getActiveChats } from '../../Utils/UserService';
import { v4 as uuidv4 } from 'uuid';

export default function Chats() {
  const { activeUser, myChats } = useContext(UserContext);

  const myChatCards = myChats.map((chat) => {
    return (
      <div className='message-card' key={uuidv4()}>
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
  });

  return (
    <div className='chats-component'>
      <div>Here are your open chats!</div>
      <div>{myChatCards}</div>
    </div>
  );
}
