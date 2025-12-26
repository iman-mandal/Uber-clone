import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserDataContext } from '../Context/userContext.jsx';


const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);


  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser);
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }


    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber" />
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your Name:</h3>
          <div className='flex w-full gap-4 bm-6'>
            <input
              required
              className='bg-[#eeee] mb-6 w-1/2 rounded px-4 py-2 broder text-lg placeholder:text-base'
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder='Firstname'
            />
            <input
              required
              className='bg-[#eeee] mb-6 rounded px-4 py-2 broder w-1/2 text-lg placeholder:text-base'
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder='Lastname'
            />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            className='bg-[#eeee] mb-6 rounded px-4 py-2 broder w-full text-lg placeholder:text-base'
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-2'>Enter your password</h3>
          <input
            required
            className='bg-[#eeee] mb-5 rounded px-4 py-2 broder w-full text-lg placeholder:text-sm'
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            placeholder='password'
          />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 broder w-full text-xl placeholder:text-base'
          >Login</button>
          <p className='text-center'>Already have an Account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This side is protected by reCAPTCHA
          and the <span className='underline'>Google Privacy Policy </span> and the
          <span className='underline'>Terms of Service apply.</span></p>
      </div>
    </div>
  )
}

export default UserSignup
