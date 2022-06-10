import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark text-white text-center'>
            <small>Copyright © {year}.</small><br />
            <small>Engineers Diary.com</small>
            <div className='awesome'>
            <p><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></p>
            <p><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></p>
            <p><FontAwesomeIcon icon={faTwitter}> </FontAwesomeIcon></p>
            <p><FontAwesomeIcon icon={faGithub}> </FontAwesomeIcon></p>
            <p><FontAwesomeIcon icon={faYoutube}> </FontAwesomeIcon></p>
            </div>
        </div>
    );
};

export default Footer;