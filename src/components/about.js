import './about.css';
import selfImage from '../assets/selfimage.svg';
import HighlightChips from './chips/highlightChips';
import TextChip from './chips/textChips';


const variable = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a leo tempus, euismod purus vitae, blandit lectus. Cras ut metus lectus. Vestibulum eget nulla lacinia, imperdiet tellus nec, lobortis quam.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a leo tempus, euismod purus vitae, blandit lectus. Cras ut metus lectus. Vestibulum eget nulla lacinia, imperdiet tellus nec, lobortis quam.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a leo tempus, euismod purus vitae, blandit lectus. Cras ut metus lectus. Vestibulum eget nulla lacinia, imperdiet tellus nec, lobortis quam.`;


export default function About() {
    return(
        <div className='about-section'> 
            <div className='about-title'>ABOUT</div>
            <div className='about-content'>
                <img src={selfImage} alt='Self' className='about-image'></img>
                <TextChip text={variable} />
                <div className='about-chips-section'>
                    <HighlightChips name='TESLA' emoji='💼'/>
                    <HighlightChips name='TESLA' emoji='💼'/>
                    <HighlightChips name='TESLA' emoji='💼'/> 
                </div>
            </div>
        </div>
    );
};
