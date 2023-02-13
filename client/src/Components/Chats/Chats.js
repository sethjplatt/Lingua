import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { v4 as uuidv4 } from 'uuid';
import ChatCard from '../ChatCard/ChatCard';
import './Chats.css';

export default function Chats() {
  const { myChats } = useContext(UserContext);

  const myChatCards = myChats.map((chat) => {
    return <ChatCard chat={chat} key={uuidv4()} />;
  });

  return (
    <div className='chats-component'>
      <div id='chats-component-body'>
        <div className='component-header'>My Chats</div>
        <div>{myChatCards}</div>
      </div>
    </div>
  );
}
