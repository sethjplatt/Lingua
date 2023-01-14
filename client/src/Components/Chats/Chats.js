import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { getActiveUser, getActiveChats } from '../../Utils/UserService';

export default function Chats() {
  const { activeUser } = useContext(UserContext);

  return (
    <>
      <div>Welcome back {activeUser?.userName}! Here are your open chats!</div>
    </>
  );
}
