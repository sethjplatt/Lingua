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
      // <div key={user.userName}>
      //   <h2>{user.userName}</h2>
      //   <h4>
      //     speaks {user.nativeLanguage} and is learning {user.learnLanguage}
      //   </h4>
      //   <button value={user} onClick={() => handleStartAChatClick(user)}>
      //     Start A Chat
      //   </button>
      // </div>
    );
  });

  return (
    <>
      <div id='connect-header'>
        Here are some other users from around the world you can chat with!
      </div>
      <div id='connect-wrapper'>{otherUserCards}</div>
    </>
  );
}
