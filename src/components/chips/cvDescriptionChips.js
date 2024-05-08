import React from 'react';
import PropTypes from 'prop-types';
import './cvDescriptionChips.css';

const CvDescriptionChips = ({ image, text }) => {
    if (!image && !text) {
        return <div className="cv-description-chips-default">
                <div className='cv-description-default-content'>Click on the logos to learn more about my experiences!</div>
            </div>;
    }

    return (
        <div className="cv-description-chips">
            <div className='cv-description-content'>
                {image && <img src={image} alt="Timeline" className="cv-description-chips-image" />}
                {text && <div className="cv-description-chips-text">{text}</div>}
            </div>
        </div>
    );
};

CvDescriptionChips.propTypes = {
    image: PropTypes.any,
    text: PropTypes.string,
};

export default CvDescriptionChips;