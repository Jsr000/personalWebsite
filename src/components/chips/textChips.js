import './textChips.css';

export default function TextChip(content) {
    const { text } = content;

    return (
        <div className='text-chip'>
            <div className={`text-content ${text.className ? text.className : ''}`}>
                {text.title ? <h3>{text.title}</h3> : null}
                {/* {text.subtitle ? <span id='text-subtitle'>{text.subtitle}</span> : null}
                {text.paragraph1 ? <p id='paragraph-1'>{text.paragraph1}</p> : null} */}
                {text.paragraph1 && (
                    <p id='paragraph-1'>
                        {text.subtitle && <span id='text-subtitle'>{text.subtitle}</span>}
                        {text.subtitle && ' '}
                        {text.paragraph1}
                    </p>
                )}
                {text.paragraph2 ? <p id='paragraph-2'>{text.paragraph2}</p> : null}
                {text.paragraph3 ? <p id='paragraph-3'>{text.paragraph3}</p> : null}
            </div>
        </div>
    );
}