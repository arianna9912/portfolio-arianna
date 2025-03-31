import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero/Hero'
import About from './components/about/About'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'

function App() {
  return (
    <>

      <Nav />
      <div className="container">
      <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Home />} />
                    <Route path="/skills" element={<Home />} />
                    <Route path="/projects" element={<Home />} />
                    <Route path="/contact" element={<Home />} />
                </Routes>
      </div>
    </>
  );
}

export default App;