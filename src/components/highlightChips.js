import './highlightChips.css';

export default function HighlightChips(content) {

    return (
        <div className='highlight-chip'>
            <div className='chip-content'>
                {content.emoji}
                {content.name}
            </div>
        </div>
    );
}