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
      <div className='profile'>
        <div className='name-age profile-name-age'>
          <div className='card-name'>
            {activeUser.firstName + ' ' + activeUser.lastName}
          </div>
          <div className='profile-age'>
            {activeUser.info?.age ? (
              activeUser.info.age
            ) : (
              <input className='age-input' placeholder='Age' />
            )}
          </div>
        </div>
        <div className='language-and-country'>
          <div className='profile-language'>
            {activeUser.nativeLanguage?.toUpperCase()} ->{' '}
            {activeUser.learnLanguage?.toUpperCase()}
          </div>

          <div className='profile-country'>
            {activeUser.info?.country ? (
              activeUser.info.country
            ) : (
              <input className='country-input' placeholder='Country' />
            )}
          </div>
        </div>
        <div className='profile-bio'>
          {activeUser.info?.bio ? (
            activeUser.info.bio
          ) : (
            <textarea
              className='bio-input'
              placeholder='fill out a quick bio so other users can get to know you!'
            ></textarea>
          )}
        </div>
      </div>
      <button onClick={handleClick}>/</button>
    </div>
  );
}
