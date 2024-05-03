import './textChips.css';

export default function HighlightChips(content) {
    return (
        <div className='text-chip'>
            <div className='text-content'>
                {content.name}
            </div>
        </div>
    );
}