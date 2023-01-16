import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { useContext, useEffect, useState } from 'react';
import { getUserByUserName } from '../../Utils/UserService';
import './ConnectCard.css';

export default function ConnectCard({ otherUser, activeUser }) {
  const { setCompatibleUsers } = useContext(UserContext);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      let completeUser = await getUserByUserName(otherUser);
      setUser(completeUser);
    };
    fetch();
  }, []);

  function handleStartAChatClick(otherUser) {
    const sortedRoomId = [otherUser.userName, activeUser.userName]
      .sort()
      .join('');

    setCompatibleUsers((prev) => {
      const filtered = prev.filter((user) => {
        return user.userName !== otherUser.userName;
      });
      return filtered;
    });

    navigate(`/chat/${sortedRoomId}/${activeUser.userName}`);
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div
      className='connect-card'
      key={user?.userName}
      style={{
        height: `${randomIntFromInterval(200, 250)}px`,
      }}
    >
      <div className='connect-item card-name'>
        {user?.firstName + ' ' + user?.lastName}
      </div>
      <div className='connect-item connect-country'>
        {user?.nativeLanguage?.toUpperCase()} ->{' '}
        {user?.learnLanguage?.toUpperCase()}
      </div>
      <div className='connect-age'>{user?.info?.age}</div>
      <div className='connect-country'>{user?.info?.country}</div>
      <div className='connect-bio'>{user?.info?.bio}</div>
      <button
        className='connect-item start-chat'
        value={otherUser}
        onClick={() => handleStartAChatClick(otherUser)}
      >
        Start A Chat
      </button>
    </div>
  );
}
