import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { getActiveUser, getActiveChats } from '../../Utils/UserService';
import { v4 as uuidv4 } from 'uuid';
import ChatCard from '../ChatCard/ChatCard';
import './Chats.css';

export default function Chats() {
  const { activeUser, myChats } = useContext(UserContext);

  const myChatCards = myChats.map((chat) => {
    return <ChatCard chat={chat} key={uuidv4()} />;
  });

  return (
    <div className='chats-component'>
      <div>Here are your open chats!</div>
      <div>{myChatCards}</div>
    </div>
  );
}
