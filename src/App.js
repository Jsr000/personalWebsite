import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <div className='placeholder'></div>
    </div>
  );
}

export default App;
