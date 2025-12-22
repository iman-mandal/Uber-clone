import React, { use } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      userName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password

    });
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
          <div className='flex gap-4 bm-6'>
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
        <p className='text-[10px] leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam, delectus! Odit iste necessitatibus quos, blanditiis,
          dicta eius mollitia ratione et dolor nesciunt quia laudantium
          corporis iusto!</p>
      </div>
    </div>
  )
}

export default UserSignup
