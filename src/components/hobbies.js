import './hobbies.css';
import TextChip from './chips/textChips';
import { hobby1, hobby2, hobby3, hobby4 } from './cvWriteUps.js';

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
            </div>
        </div>
    );
};