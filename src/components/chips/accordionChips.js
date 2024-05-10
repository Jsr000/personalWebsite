import React, { useState } from 'react';
import './accordionChips.css';

const Accordion = ({image, content}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = () => {
    setActiveIndex(activeIndex === 1 ? 0 : 1);
  };

  return (
    <div className="accordion-container">
        <div className="accordion-item">
          <div className={`accordion-title ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick()}>
            {image ? <img id='accordion-img' src={image} alt={content.title} /> : null}
            <div className='accordion-title-section'>
                {content.jobTitle ? <h3 id='accordion-title'>{content.jobTitle}</h3> : null}
                {content.subtitle ? <p id='accordion-subtitle'>{content.subtitle}</p> : null}
            </div>
            <div className='accordion-line'></div>
          </div>
          <div className={`accordion-content ${activeIndex === 1 ? 'active' : ''}`}>
                {content.companyLocation ? <p id='accordion-company-location'>{content.companyLocation}</p> : null}
                {content.duration ? <p id='accordion-duration'>{content.duration}</p> : null}
                <ul>
                    {content.bullets ? content.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                    )) : null}
                </ul>
          </div>
        </div>
    </div>
  );
};

export default Accordion;