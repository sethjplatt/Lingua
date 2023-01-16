import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import './Profile.css';

export default function Profile() {
  const { activeUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleClick() {
    navigate('/edit/' + activeUser.userName);
  }

  return (
    <div className='profile-container'>
      <div className='card-name'>
        {activeUser.firstName + ' ' + activeUser.lastName}
      </div>
      <div className='language-container'>
        <div className='profile-language'>
          {activeUser.nativeLanguage?.toUpperCase()} ->{' '}
          {activeUser.learnLanguage?.toUpperCase()}
        </div>
        <div className='profile-age'>{activeUser.info?.age}</div>
        <div className='profile-country'>{activeUser.info?.country}</div>
        <div className='profile-bio'>{activeUser.info?.bio}</div>
      </div>
      <button onClick={handleClick}>edit</button>
    </div>
  );
}
