import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

interface headerSocialsProps {
    
}

const HeaderSocials: React.FC<headerSocialsProps> = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com/in/kalyani-ghodake" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank"><FaGithub/></a>
        </div>
    );
};

export default HeaderSocials;