import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import ConnectCard from '../ConnectCard/ConnectCard';
import './Connect.css';
import { v4 as uuidv4 } from 'uuid';

export default function Connect() {
  const { activeUser, compatibleUsers, myChats } = useContext(UserContext);

  const otherUserCards = compatibleUsers.map((otherUser) => {
    console.log('otherUser', otherUser);
    return (
      <ConnectCard
        otherUser={otherUser}
        activeUser={activeUser}
        key={uuidv4()}
      />
    );
  });

  return (
    <>
      <div className='component-header'>
        Connect with Users Around the World!
      </div>
      <div id='connect-wrapper'>{otherUserCards}</div>
    </>
  );
}
