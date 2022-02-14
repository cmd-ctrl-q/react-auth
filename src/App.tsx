import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/login/Login';
import { Register } from './components/Register';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { Forgot } from './components/Forgot';
import { Reset } from './components/Reset';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/reset/:token' element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
