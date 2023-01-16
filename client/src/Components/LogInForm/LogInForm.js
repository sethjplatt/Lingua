import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { LandingContext } from '../../Context/LandingContext';
import { logInService } from '../../Utils/UserService';
import '../SignUpForm/Forms.css';

export default function LogInForm() {
  const { signUpOrLogin, setSignUpOrLogin } = useContext(LandingContext);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let user = {
      userName: data.get('userName'),
      // password: hashedPassword,
      password: data.get('password'),
    };
    const verifiedUser = await logInService(user);
    if (verifiedUser.ok) {
      navigate('/dashboard');
    }
  }

  function handleOtherClick() {
    setSignUpOrLogin('signUp');
  }

  return (
    <div className='form-screen'>
      <div className='form-wrapper'>
        <h1>Please Log In</h1>
        <form className='login-form' onSubmit={handleSubmit}>
          <input
            className='form-input'
            placeholder='User Name'
            type='text'
            name='userName'
            autoComplete='email'
          />
          <input
            className='form-input'
            placeholder='Password'
            type='password'
            name='password'
            autoComplete='current-password'
          />
          <div>
            <button className='submit' type='submit'>
              Submit
            </button>
          </div>
        </form>
        <div className='other-form'>
          <div>Dont have an account?</div>
          <button onClick={handleOtherClick}>Sign up</button>
        </div>
      </div>
    </div>
  );
}
