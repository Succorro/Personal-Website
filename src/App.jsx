// import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div >
      <Nav/>
      <Routes>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
