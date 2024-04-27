import React from 'react'
import drippedelmo from '../assets/drippedelmo.svg'
import './hero.css';
import ParticlesComp from './particlescomp';


function Hero() {
    return (
        <div className='hero-section'>
            <ParticlesComp />
            <div className='hero-info'>
                <div className='hero-text'>
                    <p>Hi there, I'm Jason Liang! <br/> A &lt;Rotating Slot&gt; </p>
                </div>
                <div className='hero-elmo'>
                    <img src={drippedelmo} alt='Dripped Elmo'></img>
                </div>
            </div>
        </div>
    )
}

export default Hero