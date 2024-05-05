import './textChips.css';

export default function TextChip(content) {
    return (
        <div className='text-chip'>
            <div className='text-content'>
                {content.text}
            </div>
        </div>
    );
}