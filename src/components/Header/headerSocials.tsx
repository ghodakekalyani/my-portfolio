import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

interface headerSocialsProps {}

const HeaderSocials: React.FC<headerSocialsProps> = () => {
    return (
        <>
            <a href="https://linkedin.com/in/kalyani-ghodake" className="header__socials" target="_blank">
                <BsLinkedin />
            </a>
            <a href="https://github.com" className="header__socials" target="_blank">
                <FaGithub />
            </a>
        </>
    );
};

export default HeaderSocials;
