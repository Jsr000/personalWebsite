import './cv.css';
import React, { useState, useEffect } from 'react';
import UBCLogo from '../../assets/Icons/universityofbc_logo.jpg';
import GeoComplyLogo from '../../assets/Icons/geocomply_logo.jpg';
import VoronoiLogo from '../../assets/Icons/voronoi_logo.jpg';
import BlackBerryLogo from '../../assets/Icons/blackberry_logo.jpg';
import TeslaLogo from '../../assets/Icons/tesla_motors_logo.jpg';
import EasterEgg from '../../assets/Icons/EasterEgg_logo.jpg';
import { UBCWriteUp, GeoComplyWriteUp, VoronoiWriteUp, BlackBerryWriteUp, TeslaWriteUp, EasterEggWriteUp} from '../cvWriteUps';
import CvDescriptionChips from '../chips/cvDescriptionChips';
import Accordion from '../chips/accordionChips.js';

export default function Cv() {
    const [referenceWidth, setReferenceWidth] = useState(200);

    const [selectedCVItem, setImageAndText] = useState({
        image: TeslaLogo,
        text: TeslaWriteUp});

    const handleImageClick = (image, writeUp) => {
        setImageAndText({
            image: image,
            text: writeUp
        });
    }

    // Update referenceWidth state when component mounts or window resizes
    useEffect(() => {
        const updateReferenceWidth = () => {
            const referenceElement1 = document.getElementById('solid-line');
            const referenceElement2 = document.getElementById('dashed-line');
            if (referenceElement1 && referenceElement2) {
                const width = referenceElement1.offsetWidth + referenceElement2.offsetWidth;
                setReferenceWidth(width);
            }
        };

        updateReferenceWidth();
        window.addEventListener('resize', updateReferenceWidth);

        return () => {
            window.removeEventListener('resize', updateReferenceWidth);
        };
    }, []);

    return(
        <div className='cv-section'>
            <div className='cv-title'>
                CV
            </div>
            <div className='timeline-section'>
                <div className='timeline-line-div'>
                    <div className='timeline-line'>
                        <div className='timeline-dot-1'>
                            <div className='timeline-dot-inner-up'></div>
                            <img className={`timeline-image-up ${selectedCVItem.image === UBCLogo ? 'timeline-image-selected' : ''}`}
                                id='timeline-image-1' src={UBCLogo} alt='UBC' onClick={() => handleImageClick(UBCLogo, UBCWriteUp)}/>
                        </div>
                        <div className='timeline-dot-2' style={{left: `${(referenceWidth - referenceWidth / 6 - 74) / 4 * 1 + 85}px`}}>
                            <div className='timeline-dot-inner-down'></div>
                            <img className={`timeline-image-down ${selectedCVItem.image === GeoComplyLogo ? 'timeline-image-selected' : ''}`}
                                id='timeline-image-2' src={GeoComplyLogo} alt='GeoComply' onClick={() => handleImageClick(GeoComplyLogo, GeoComplyWriteUp)}/>
                        </div>
                        <div className='timeline-dot-3' style={{left: `${(referenceWidth - referenceWidth / 6 - 74) / 4 * 2 + 85}px`}}>
                            <div className='timeline-dot-inner-up'></div>
                            <img className={`timeline-image-up ${selectedCVItem.image === VoronoiLogo ? 'timeline-image-selected' : ''}`} 
                                id='timeline-image-3' src={VoronoiLogo} alt='Voronoi' onClick={() => handleImageClick(VoronoiLogo, VoronoiWriteUp)}/>
                        </div>
                        <div className='timeline-dot-4' style={{left: `${(referenceWidth - referenceWidth / 6 - 74) / 4 * 3 + 85}px`}}>
                            <div className='timeline-dot-inner-down'></div>
                            <img className={`timeline-image-down ${selectedCVItem.image === BlackBerryLogo ? 'timeline-image-selected' : ''}`} 
                                id='timeline-image-3' src={BlackBerryLogo} alt='BlackBerry' onClick={() => handleImageClick(BlackBerryLogo, BlackBerryWriteUp)}/>
                        </div>
                        <div className='timeline-dot-5' style={{left: `${(referenceWidth - referenceWidth / 6) / 4 * 4 + 15}px`}}>
                            <div className='timeline-dot-inner-up'></div>
                            <img className={`timeline-image-up ${selectedCVItem.image === TeslaLogo ? 'timeline-image-selected' : ''}`}
                                id='timeline-image-5' src={TeslaLogo} alt='Tesla' onClick={() => handleImageClick(TeslaLogo, TeslaWriteUp)}/>
                        </div>
                        <div className='timeline-dot-6' style={{left: `${referenceWidth }px`}} onClick={() => handleImageClick(EasterEgg, EasterEggWriteUp)}></div>
                    </div>
                    <div className='timeline-line-solid' id='solid-line'></div>
                    <div className='timeline-line-dashed' id='dashed-line'></div>
                </div>
            </div>
            <div className='timeline-selected-title' id='timeline-selected-title'>Click on the logos to learn more about my experiences!</div>
            <div className='timeline-selected-text'>
                <CvDescriptionChips image={selectedCVItem.image} text={selectedCVItem.text} />
            </div>
            <div className='cv-accordion-section'>
                <Accordion image={TeslaLogo} content={TeslaWriteUp} />
                <Accordion image={BlackBerryLogo} content={BlackBerryWriteUp} />
                <Accordion image={VoronoiLogo} content={VoronoiWriteUp} />
                <Accordion image={GeoComplyLogo} content={GeoComplyWriteUp} />
            </div>
            <div className='cv-footer'>
                <div className='cv-footer-text'>
                    Check out my Resume <a href='https://docs.google.com/document/d/1Nf3hRWbx-767t8iKVzSFHBT5VYIrutK9jZv9QCdydbk/edit?usp=sharing'><b>here</b></a>!
                </div>
            </div>
        </div>
    )
};