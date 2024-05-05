import './highlightChips.css';

export default function HighlightChips(content) {
    return (
        <div className='highlight-chip'>
            <div className='chip-content'>
                <div className='chip-emoji'>
                    {content.emoji}
                </div>
                {content.name}
            </div>
        </div>
    );
}