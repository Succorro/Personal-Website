import './App.css'
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';
function App() {
  const [appStyle, setAppStyle] = useState('w-full bg-cornflowerblue')
  return (
    <div className={appStyle}>
      <Nav setAppStyle={setAppStyle}/>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
      
    </div>
  )
}

export default App
