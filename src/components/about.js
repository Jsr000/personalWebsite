import './about.css';
import React, { useState } from 'react';
import selfImage1 from '../assets/selfimage1.svg';
import selfImage2 from '../assets/selfimage2.svg';
import TextChip from './chips/textChips';
import { IntroWriteUp } from './cvWriteUps';

export default function About() {
    const [currentImage, setCurrentImage] = useState(selfImage1);

    const handleImageClick = () => {
        const imageElement = document.getElementById('about-image-id');
        imageElement.classList.add('spinning-image');
        setTimeout(() => {
            setCurrentImage(currentImage === selfImage1 ? selfImage2 : selfImage1);
        }, 650);
        setTimeout(() => {
            imageElement.classList.remove('spinning-image');
        }, 1000);
    };

    return(
        <div className='about-section'> 
            <div className='about-title'>ABOUT</div>
            <div className='about-content'>
                <img src={currentImage} alt='Self' className='about-image' id='about-image-id' onClick={handleImageClick}></img>
                <TextChip text={IntroWriteUp}/>
            </div>
        </div>
    );
};
