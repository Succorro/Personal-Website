import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home /Home';
import Projects from './Projects/Projects';
import About from './About/About';

function App() {
  return (
    <div className='w-full bg-color'>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
      
    </div>
  )
}

export default App
