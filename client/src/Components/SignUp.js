import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpService } from '../Utils/UserService';

// import './Forms.css';

export default function SignUp() {
  // const [signUpData, setSignUpData] = useState({});
  const [valid, setValid] = useState(null);
  const [sucessfullyCreated, setSucessfullyCreated] = useState(null);
  const navigate = useNavigate();

  // function handleChange(event) {
  //   setSignUpData({ ...signUpData, [event.target.name]: event.target.value });
  // }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (
      !data.get('firstName') ||
      !data.get('lastName') ||
      !data.get('username') ||
      !data.get('password')
    ) {
      setValid(false);
      console.log('invalid');
      return;
    } else {
      setValid(true);
    }
    const url = 'https://localhost:3001/signup';
    // const password = data.get('password');
    // const hashedPassword = bcrypt.hashSync(password);
    let user = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      userName: data.get('username'),
      password: data.get('password'),
    };
    const response = signUpService(user);
    if (response) {
      setSucessfullyCreated(true);
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  }

  function handleOtherClick() {
    navigate('/login');
  }

  return (
    <div className='form-screen'>
      {sucessfullyCreated ? (
        <h1>Account Created! Redirecting to Log In</h1>
      ) : (
        <div className='form-wrapper'>
          <h1>Sign Up for a Free Account</h1>
          <form className='form' onSubmit={handleSubmit}>
            <label>
              <p>First Name</p>
              <input
                type='text'
                name='firstName'
                // value={signUpData.firstName || ''}
                // onChange={handleChange}
              />
            </label>
            <label>
              <p>Last Name</p>
              <input
                type='text'
                name='lastName'
                // value={signUpData.lastName || ''}
                // onChange={handleChange}
              />
            </label>
            <label>
              <p>Username</p>
              <input
                type='text'
                name='username'
                // value={signUpData.username || ''}
                // onChange={handleChange}
              />
            </label>
            <label>
              <p>Password</p>
              <input
                type='password'
                name='password'
                // value={signUpData.password || ''}
                // onChange={handleChange}
              />
            </label>
            <div>
              <button className='submit' type='submit'>
                Submit
              </button>
            </div>
          </form>
          <div className='notValid'>
            {valid === false ? (
              <p>Please fill out all sections to create an account</p>
            ) : null}
          </div>
          <div className='other-form'>
            <div>Already Have an Account?</div>
            <button onClick={handleOtherClick}>Log In</button>
          </div>
        </div>
      )}
    </div>
  );
}
