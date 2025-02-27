import { useState, type FormEvent, type ChangeEvent } from 'react';
import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import type { UserLogin } from '../interfaces/userLogin';

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: '',
  });

  const [loading, setLoading] = useState(false); // ✅ Add loading state
  const [error, setError] = useState<string | null>(null); // ✅ Add error state

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
    setLoading(true); // ✅ Show loading state
    setError(null); // ✅ Reset error state

    try {
      const data = await login(loginData); // ✅ Await API call

      if (data && data.token) { 
        Auth.login(data.token); // ✅ Store token
      } else {
        throw new Error('No token received from server'); // ✅ Prevent undefined errors
      }
    } catch (err) {
      console.error('🚨 Login failed:', err);
      setError('Invalid username or password. Please try again.'); // ✅ User-friendly error
    } finally {
      setLoading(false); // ✅ Hide loading state
    }
  };

  return (
    <div className='form-container'>
      <form className='form login-form' onSubmit={handleSubmit}>
        <h1>Login</h1>

        {error && <p className="error-message">{error}</p>} {/* ✅ Show error if any */}

        <div className='form-group'>
          <label>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            value={loginData.username || ''}
            onChange={handleChange}
            placeholder='you@youremailaddress.com'
            required
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
            required
          />
        </div>

        <div className='form-group'>
          <button className='btn btn-primary' type='submit' disabled={loading}>
            {loading ? "Logging in..." : "Login"} {/* ✅ Show loading text */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;



/*
import { useState, type FormEvent, type ChangeEvent } from 'react';
import Auth from '../utils/auth';
import {login } from '../api/authAPI';
import type { UserLogin } from '../interfaces/userLogin';

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
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
      const data = await login(loginData); // Await login function call
      if (data && data.token) { // Ensure token exists before using it
        Auth.login(data.token);
      } else {
        throw new Error('No token received from server');
      }
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
    </div>
  );
};

export default Login;

*/