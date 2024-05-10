import React from 'react';
import elmologo from '../../assets/elmologo.svg'
import './hamburgerMenu.css';
import { Link, animateScroll} from 'react-scroll';

const HamburgerMenu = () => {

    const scrollToTopOptions = {
        duration: 500,
        smooth: true,
    };

    const scrollToTop = () => {
        animateScroll.scrollToTop(scrollToTopOptions);
    };

    const onClickMenu = () => {
        document.getElementById("menu-hamburger").classList.toggle("change");
        document.getElementById("nav").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
    }

    return (
        <div className='hamburger-menu-container'>
            <div className='elmo-logo' id='home'>
                <img className='elmo-icon' src={elmologo} alt='Logo' onClick={scrollToTop}/>
            </div>
            <div id="menu-bar">
                <div id="menu-hamburger" onClick={onClickMenu}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </div>
                <ul class="nav" id="nav">
                    <li className='menu-hamburger-item'>
                        <Link to="about-title" onClick={onClickMenu} spy={true} smooth={true} offset={-150} duration={500}>
                            ABOUT
                        </Link>
                    </li>
                    <li className='menu-hamburger-item'>
                        <Link to="cv-title" onClick={onClickMenu} spy={true} smooth={true} offset={-150} duration={500}> 
                            CV 
                        </Link>
                    </li>
                    <li className='menu-hamburger-item'>
                        <Link to="hobbies-title" onClick={onClickMenu} spy={true} smooth={true} offset={-150} duration={500}> 
                            HOBBIES
                        </Link>
                    </li>
                    <li className='contact-hamburger-button'>
                        <Link to="contact-title" onClick={onClickMenu} spy={true} smooth={true} offset={-150} duration={500}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="menu-bg" id="menu-bg"></div>
        </div>
    );
};

export default HamburgerMenu;