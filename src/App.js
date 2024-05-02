import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import './variables.css'
import HighlightChips from './components/highlightChips';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <div className='placeholder'> <HighlightChips name='placeholder Text'/> </div>
    </div>
  );
}

export default App;
