import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { LandingContext } from '../../Context/LandingContext';
import { logInService } from '../../Utils/UserService';
import '../SignUpForm/Forms.css';

export default function LogInForm() {
  const { setSignUpOrLogin } = useContext(LandingContext);
  const [valid, setValid] = useState('');
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
      console.log(verifiedUser);
      navigate('/dashboard');
    } else {
      setValid('invalid');
    }
  }

  function handleOtherClick() {
    setSignUpOrLogin('signUp');
  }

  return (
    <div className='form-wrapper'>
      <div className='form-content'>
        <div className='form-title'>Log In</div>
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
          <div className='form-submit'>
            <button className='submit' type='submit'>
              Log In
            </button>
          </div>
        </form>
        {valid === 'invalid' ? (
          <div className='invalid-notification'>
            User Name or Password is Incorrect
          </div>
        ) : null}
        <div className='other-form'>
          <div>Dont have an account?</div>
          <button onClick={handleOtherClick}>Sign up</button>
        </div>
      </div>
    </div>
  );
}
