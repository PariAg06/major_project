import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import SignUp from './components/SignUp';
import Home from './components/Home';
import Diseases from './components/Diseases';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'
const App = () => {
  return (
    <div className='main'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Body/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/diseases" element={<Diseases/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
