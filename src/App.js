import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import './variables.css'
import About from './components/about';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <About />
        <div className='placeholder'></div>
    </div>
  );
}

export default App;
