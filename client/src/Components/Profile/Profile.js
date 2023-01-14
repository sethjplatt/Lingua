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
      <div className='card-name'>{activeUser.userName}</div>
      <div className='language-container'>
        <div className='profile-native'>{activeUser.nativeLanguage}</div>
        <div className='profile-learn'>{activeUser.learnLanguage}</div>
      </div>
      <button onClick={handleClick}>edit</button>
    </div>
  );
}
