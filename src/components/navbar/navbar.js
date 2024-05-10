import React from 'react'
import elmologo from '../../assets/elmologo.svg'
import './navbar.css';
import { Link, animateScroll} from 'react-scroll';
import HamburgerMenu from './hamburgerMenu.js';

function Navbar() {

    const scrollToTopOptions = {
        duration: 500,
        smooth: true,
    };

    const scrollToTop = () => {
        animateScroll.scrollToTop(scrollToTopOptions);
    };
    
  return (
    <div className='navbar-div'>
        <navbar className='navbar'>
            <div className='navbar-container'>
                <div className='elmo-logo' id='home'>
                    <img className='elmo-icon' src={elmologo} alt='Logo' onClick={scrollToTop}/>
                </div>
                <div className='nav-stroke'>
                    <ul id='menu'>
                        <li className='menu-item'>
                            <Link to="about-title" spy={true} smooth={true} offset={-150} duration={500}>
                                ABOUT
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link to="cv-title" spy={true} smooth={true} offset={-150} duration={500}> 
                                CV 
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link to="hobbies-title" spy={true} smooth={true} offset={-150} duration={500}> 
                                HOBBIES
                            </Link>
                        </li>
                        <li className='contact-button'>
                            <Link to="contact-title" spy={true} smooth={true} offset={-150} duration={500}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </navbar>
        <HamburgerMenu />
    </div>
  )
}

export default Navbar