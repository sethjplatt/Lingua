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
        <div className='header'>Lingua</div>
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
