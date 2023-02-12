import SignUpForm from '../SignUpForm/SignUpForm';
import LogInForm from '../LogInForm/LogInForm';
import { useState } from 'react';
import { LandingContext } from '../../Context/LandingContext';

import './LandingPage.css';

export default function LandingPage() {
  const [signUpOrLogin, setSignUpOrLogin] = useState('signUp');

  return (
    <LandingContext.Provider value={{ signUpOrLogin, setSignUpOrLogin }}>
      <div
        id='landing-wrapper'
        style={{
          backgroundImage: `url(/landmarks-dash.jpg)`,
        }}
      >
        <div className='header'>
          <div className='name-and-logo'>
            <div>Lingua</div>
            <img
              id='logo'
              alt='logo'
              src='https://user-images.githubusercontent.com/108771602/218258259-074121db-0346-4621-aec0-ac9182b05b2b.png'
              height={35}
              width={35}
            ></img>
          </div>
          <div className='icons'>
            <svg
              width='35px'
              height='35px'
              viewBox='0 0 18 18'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='#ffffff'
                d='M9 0a9 9 0 0 0-9 9 8.654 8.654 0 0 0 .05.92 9 9 0 0 0 17.9 0A8.654 8.654 0 0 0 18 9a9 9 0 0 0-9-9zm5.42 13.42c-.01 0-.06.08-.07.08a6.975 6.975 0 0 1-10.7 0c-.01 0-.06-.08-.07-.08a.512.512 0 0 1-.09-.27.522.522 0 0 1 .34-.48c.74-.25 1.45-.49 1.65-.54a.16.16 0 0 1 .03-.13.49.49 0 0 1 .43-.36l1.27-.1a2.077 2.077 0 0 0-.19-.79v-.01a2.814 2.814 0 0 0-.45-.78 3.83 3.83 0 0 1-.79-2.38A3.38 3.38 0 0 1 8.88 4h.24a3.38 3.38 0 0 1 3.1 3.58 3.83 3.83 0 0 1-.79 2.38 2.814 2.814 0 0 0-.45.78v.01a2.077 2.077 0 0 0-.19.79l1.27.1a.49.49 0 0 1 .43.36.16.16 0 0 1 .03.13c.2.05.91.29 1.65.54a.49.49 0 0 1 .25.75z'
              />
            </svg>
            <svg
              width='35px'
              height='35px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 1.25a1.75 1.75 0 0 0-1.737 1.967A7.003 7.003 0 0 0 5 10v7H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-7a7.003 7.003 0 0 0-5.263-6.783A1.75 1.75 0 0 0 12 1.25ZM12 23a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3Z'
                fill='#FFFFFF'
              />
            </svg>
          </div>
        </div>
        <div id='landing-body'>
          <div id='left'>
            <div className='slogan'>
              <div id='landing-chat'>Chat</div>
              <div id='landing-connect'>Connect</div>
              <div id='landing-learn'>Learn</div>
            </div>
            {/* <img id='landing-image' src='/landmarks-dash.jpg'></img> */}
          </div>
          <div id='form'>
            {signUpOrLogin == 'signUp' ? <SignUpForm /> : <LogInForm />}
          </div>
        </div>
      </div>
    </LandingContext.Provider>
  );
}
