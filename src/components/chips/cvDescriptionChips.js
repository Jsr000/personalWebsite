import React from 'react';
import './cvDescriptionChips.css';

const CvDescriptionChips = ({ image, text }) => {
    if (!image && !text) {
        return <div className="cv-description-chips-default">
                <div className='cv-description-default-container'>
                    <p id='cv-description-default-p'>A chronoloical timeline representation of my experiences</p>
                    <div className='cv-description-default-content'>Click on the logos to learn more!</div>
                </div>
            </div>;
    }

    return (
        <div className="cv-description-chips">
            <div className='cv-description-container'>
                {image && <img src={image} alt="Timeline" className="cv-description-chips-image" />}
                <div className={`cv-description-content ${text.className ? text.className : ''}`}>
                    {text.jobTitle ? <h3>{text.jobTitle}</h3> : null}
                    {text.location && text.company ? <p id='company-location'>{text.company} | {text.location}</p> : null}
                    {text.duration ? <p id='duration'>{text.duration}</p> : null}
                    <ul>
                        {text.bullets ? text.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        )) : null}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CvDescriptionChips;