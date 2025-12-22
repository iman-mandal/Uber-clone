import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';
import CaptainLogin from './pages/captainLogin';
import CaptainSignup from './pages/captainSignup';
import Home from './pages/Home';

const App = () => {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/signup' element={<UserSignup />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/captain-login' element={<CaptainLogin />} />
          <Route path='/captain-signup' element={<CaptainSignup />} />
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
