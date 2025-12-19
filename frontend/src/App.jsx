import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';
import CaptainLogin from './pages/captainLogin';
import CaptainSignup from './pages/captainSignup';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<UserSignup />} />
          <Route path='/' element={<UserLogin />} />
          <Route path='/' element={<CaptainLogin />} />
          <Route path='/' element={<CaptainSignup />} />

        </Routes>
      </div>
    </>
  )
}

export default App
