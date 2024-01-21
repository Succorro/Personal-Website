// import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import {useState, useEffect } from 'react';

function App() {
  const [divStyle, setDivStyle] = useState({})
  useEffect(()=>{
    'onpageload handle the effect'
  },[])
  return (
    <div >
      <Nav/>
      <Routes>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
      <div 
      className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-primary'
      style={divStyle}
      ></div>
    </div>
  )
}

export default App
