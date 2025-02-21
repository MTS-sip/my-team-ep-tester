import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import type { User } from '../interfaces/User';

const Login = () => {
  const [loginData, setLoginData] = useState<User>({
    username: '',
    password: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <div className='form-container'>
      <form className='form login-form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='form-group'>
          <label>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            value={loginData.username || ''}
            onChange={handleChange}
            placeholder='you@youremailadress.com'
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            value={loginData.password || ''}
            onChange={handleChange}
            placeholder='password'
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary' type='submit'>
            Login
          </button>
        </div>
      </form>
      <div className='form-group'>
        <button className='btn btn-secondary' type='button'>
          <Link to='/register-account'>Create an Account</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;