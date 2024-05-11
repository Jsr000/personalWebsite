import React, { useState } from 'react';
import './accordionChips.css';
import arrowDownExpand from '../../assets/accordionExpandCollapse.svg';

const Accordion = ({image, content}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = () => {
    setActiveIndex(activeIndex === 1 ? 0 : 1);
  };

  return (
    <div className="accordion-container">
        <div className="accordion-item">
          <div className={`accordion-title ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick()}>
            <span className='accordion-span'>
                {image ? <img id='accordion-img' src={image} alt={content.title} /> : null}
                <div className='accordion-title-section'>
                    {content.jobTitle ? <h3 id='accordion-title-inner'>{content.jobTitle}</h3> : null}
                    {content.company && content.location ? <p id='accordion-company-location'>{content.company} | {content.location}</p> : null}
                </div>
            </span>
            <div className={`accordion-line ${activeIndex === 1 ? 'active' : ''}`}>
                <img id='accordion-expand-icon' src={arrowDownExpand} alt='Expand' />
            </div>
          </div>
          <div className={`accordion-content ${activeIndex === 1 ? 'active' : ''}`}>
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