import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
// import bcrypt from 'bcryptjs';
// import Cookies from 'js-cookie';
import { logInService } from '../Utils/UserService';
// import { UserContext } from '../Context/UserContext';
import './Forms.css';

export default function LogIn() {
  // const [activeUser, setActiveUser] = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // const password = data.get('password');
    // const hashedPassword = bcrypt.hashSync(password);
    let user = {
      email: data.get('email'),
      // password: hashedPassword,
      password: data.get('password'),
    };
    const verified = await logInService(user);
    // if (verified) {
    //   Cookies.set('token', verified.token, { expires: 7 });
    //   console.log('verified', verified);
    //   setActiveUser(verified.user);
    //   navigate('/dashboard');
    // }
  }

  function handleOtherClick() {
    navigate('/');
  }

  return (
    <div className='form-screen'>
      <div className='form-wrapper'>
        <h1>Please Log In</h1>
        <form className='form' onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type='text' name='email' autoComplete='email' />
          </label>
          <label>
            <p>Password</p>
            <input
              type='password'
              name='password'
              autoComplete='current-password'
            />
          </label>
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
