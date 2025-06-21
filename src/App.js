import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';


import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact /> 
    </>
  );
}

export default App;
