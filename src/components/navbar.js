import React from 'react'
import elmologo from '../assets/elmologo.svg'
import './navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className='navbar-div'>
        <navbar className='navbar'>
            <div className='navbar-container'>
                <div className='elmo-logo' id='home'>
                    <Link to="home" spy={true} smooth={true} offset={-20} duration={500}>
                        <img className='elmo-icon' src={elmologo} alt='Logo'/>
                    </Link>
                </div>
                <div className='nav-stroke'>
                    <ul id='menu'>
                        <li className='menu-item'>
                            <Link to="about-title" spy={true} smooth={true} offset={-20} duration={500}>
                                ABOUT
                            </Link>
                        </li>
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