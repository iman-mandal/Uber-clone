import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CaptainDataContext } from '../Context/CaptainContext';
import axios from 'axios';


const CaptainSignup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');


  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData={
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        colour: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,captainData);

if(response.status===201){
  const data= response.data;
  setCaptain(data.captain);
  localStorage.setItem('token', data.token);
  navigate('/captain-home')
}

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleCapacity('');
    setVehiclePlate('');
    setVehicleColor('');
    setVehicleType('');
  };


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="uber" />
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your Captain's Name:</h3>
          <div className='flex gap-4 bm-5'>
            <input
              required
              className='bg-[#eeee] mb-5 w-1/2 rounded px-4 py-2 broder text-lg placeholder:text-base'
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder='Firstname'
            />
            <input
              required
              className='bg-[#eeee] mb-5 rounded px-4 py-2 broder w-1/2 text-lg placeholder:text-base'
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder='Lastname'
            />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's your Captain's email</h3>
          <input
            required
            className='bg-[#eeee] mb-5 rounded px-4 py-2 broder w-full text-lg placeholder:text-base'
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
          <h3 className='text-lg font-medium mb-2'> Vehicle Information : </h3>
          <div className='flex gap-4 bm-5'>
            <input
              required
              className='bg-[#eeee] mb-3 w-1/2 rounded px-4 py-2 broder text-lg placeholder:text-base'
              type="text"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
              placeholder='Vehicle Colour'
            />
            <input
              required
              className='bg-[#eeee] mb-3 rounded px-4 py-2 broder w-1/2 text-lg placeholder:text-base'
              type="text"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
              placeholder='Vehile Number'
            />
          </div>
          <div className='flex gap-4 bm-5'>
            <input
              required
              className='bg-[#eeee] mb-5 w-1/2 rounded px-4 py-2 broder text-lg placeholder:text-base'
              type="text"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
              placeholder='Vehicle Capacity'
            />
            <select
              required
              className='bg-[#eeee] mb-5 rounded px-4 py-2 broder w-1/2 text-lg placeholder:text-base'
              type="text"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >  <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 broder w-full text-xl placeholder:text-base'
          >Create Captain Account</button>
          <p className='text-center'>Already have an Account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
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

export default CaptainSignup
