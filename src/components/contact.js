import './contact.css';
import hippoicon from '../assets/hippoicon.svg';
import linkedinicon from '../assets/linkedinicon.svg';
import spotifyicon from '../assets/spotifyicon.svg';
import mailicon from '../assets/mailicon.svg';

export default function Contact() {
    return(
        <div className='contact-section'>
            <div className='contact-title'>
                CONTACT
            </div>
            <div className='contact-content'>
                <div className='contact-text'>Feel free to reach out!</div>
                <div className='contact-icons'>
                    <div className='contact-icon-row1'>
                        <a href='mailto:jasonliang2002@gmail.com'>
                            <img src={mailicon} alt='Mail Icon'></img>
                        </a>
                        <a href="https://www.linkedin.com/in/liang-xiao-feng/">
                            <img src={linkedinicon} alt='LinkedIn Icon'></img>
                        </a>
                    </div>
                    <div className='contact-icon-row2'>
                        <img src={hippoicon} alt='Hippo Icon'></img>
                        <a href='https://open.spotify.com/user/aeswpj65kv9ul8bn9mu0lg9hk?si=5a046b81dcdd480d'>
                            <img src={spotifyicon} alt='Spotify Icon'></img>
                        </a>
                    </div>
                </div>
                <div className='contact-footer'>
                    <div className='contact-footer-text'>Made with &lt;3 by Jason Liang</div>
                </div>
            </div>
        </div>
    );
};