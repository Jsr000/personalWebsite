import React from 'react'
import elmologo from '../assets/elmologo.svg'
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar-div'>
        <navbar className='navbar'>
            <div className='navbar-container'>
                <div className='elmo-logo'>
                    <a href='#home'>
                        <img className='elmo-icon' src={elmologo} alt='Logo'/>
                    </a>
                </div>
                <div className='nav-stroke'>
                    <ul id='menu'>
                        <li className='menu-item'><a href='#about'> ABOUT </a></li>
                        <li className='menu-item'><a href='#cv'> CV </a></li>
                        <li className='menu-item'><a href='#hobbies'>HOBBIES</a></li>
                        <li className='contact-button'><a href='#contact'>CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </navbar>
    </div>
  )
}

export default Navbar