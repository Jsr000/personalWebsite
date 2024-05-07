import './cv.css';
import React, { useState, useEffect } from 'react';



export default function Cv() {
    const [referenceWidth, setReferenceWidth] = useState(200);

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

        updateReferenceWidth(); // Initial update
        window.addEventListener('resize', updateReferenceWidth); // Listen for window resize

        return () => {
            window.removeEventListener('resize', updateReferenceWidth); // Clean up
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
                        </div>
                        <div className='timeline-dot-2' style={{left: `${(referenceWidth - referenceWidth / 6 - 74) / 4 * 1 + 85}px`}}>
                            <div className='timeline-dot-inner-down'></div>
                        </div>
                        <div className='timeline-dot-3' style={{left: `${(referenceWidth - referenceWidth / 6 - 74) / 4 * 2 + 85}px`}}>
                            <div className='timeline-dot-inner-up'></div>
                        </div>
                        <div className='timeline-dot-4' style={{left: `${(referenceWidth - referenceWidth / 6 - 74) / 4 * 3 + 85}px`}}>
                            <div className='timeline-dot-inner-down'></div>
                        </div>
                        <div className='timeline-dot-5' style={{left: `${(referenceWidth - referenceWidth / 6) / 4 * 4 + 15}px`}}>
                            <div className='timeline-dot-inner-up'></div>
                        </div>
                        <div className='timeline-dot-6' style={{left: `${referenceWidth }px`}}></div>
                    </div>
                    <div className='timeline-line-solid' id='solid-line'></div>
                    <div className='timeline-line-dashed' id='dashed-line'></div>
                </div>
            </div>
        </div>
    )
};