import './hobbies.css';
import TextChip from './chips/textChips';

const hobby1 = `Music: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Morbi a leo tempus, euismod purus vitae, blandit lectus. Cras ut metus lectus. Vestibulum eget nulla lacinia, imperdiet tellus nec, lobortis quam.`;

const hobby2 = `Music: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Morbi a leo tempus, euismod purus vitae, blandit lectus. Cras ut metus lectus. Vestibulum eget nulla lacinia, imperdiet tellus nec, lobortis quam.`;

const hobby3 = `Music: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Morbi a leo tempus, euismod purus vitae, blandit lectus. Cras ut metus lectus. Vestibulum eget nulla lacinia, imperdiet tellus nec, lobortis quam.`;

const hobby4 = `Music: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Morbi a leo tempus, euismod purus vitae, blandit lectus. Cras ut metus lectus. Vestibulum eget nulla lacinia, imperdiet tellus nec, lobortis quam.`;

const hobby5 = `Film Photography Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a leo 
    tempus, euismod purus vitae, blandit lectus. Cras ut metus lectus. Vestibulum eget nulla lacinia, imperdiet tellus nec, lobortis quam.
    (Link to some of my photos)
    Also add a section about the cameras that I use + film`;


export default function Hobbies() {

    return(
        <div className='hobbies-section'>
            <div className='hobbies-title'>
                HOBBIES
            </div>
            <div className='hobbies-content'>
                <TextChip text={hobby1}/>
                <TextChip text={hobby2}/>
                <TextChip text={hobby3}/>
                <TextChip text={hobby4}/>
                <TextChip text={hobby5}/>
            </div>
        </div>
    );
};