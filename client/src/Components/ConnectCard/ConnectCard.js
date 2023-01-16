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

  function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt());
    console.log(countryCode, codePoints);
    return String.fromCodePoint(...codePoints);
  }

  return (
    <div className='connect-card-wrapper'>
      <div
        className='connect-card'
        key={user?.userName}
        style={{
          height: `${randomIntFromInterval(240, 270)}px`,
        }}
      >
        <div className='connect-content'>
          <div className='name-age'>
            <div className=' connect-name connect-header'>
              {user?.firstName}
            </div>
            <div className='connect-age connect-header'>{user?.info?.age}</div>
          </div>
          <div className='language-and-country'>
            <div className='connect-language'>
              {user?.nativeLanguage?.toUpperCase()} ->{' '}
              {user?.learnLanguage?.toUpperCase()}
            </div>
            <div className='connect-country'>
              {user?.info?.country ? getFlagEmoji(user.info.country) : null}
            </div>
          </div>
          <div className='connect-bio'>{user?.info?.bio}</div>
        </div>
        <button
          className='start-chat'
          value={otherUser}
          onClick={() => handleStartAChatClick(otherUser)}
        >
          Start A Chat
        </button>
      </div>
    </div>
  );
}
