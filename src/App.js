import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero/hero.js';
import './variables.css'
import About from './components/about';
import Cv from './components/cv.js';
import Hobbies from './components/hobbies.js';
import Contact from './components/contact.js';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Cv />
        <Hobbies />
        <Contact />
    </div>
  );
}

export default App;
