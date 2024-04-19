import React from 'react'
import drippedelmo from '../assets/drippedelmo.svg'
import './hero.css';

function Hero() {
    return (
        <div className='hero-section'>
            <div className='hero-info'>
                <div className='hero-text'>
                    <p>asdfkjasdfjkashfjkl</p>
                </div>
                <div className='hero-elmo'>
                    <img src={drippedelmo} alt='Dripped Elmo'></img>
                </div>
            </div>
        </div>
    )
}

export default Hero