import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero/hero.js';
import './variables.css'
import About from './components/about';
import Cv from './components/cv.js';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Cv />
        <div className='placeholder'></div>
    </div>
  );
}

export default App;
