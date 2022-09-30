import React from 'react';
import './nav.less';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiUserStarFill } from 'react-icons/ri';
import { ImBriefcase } from 'react-icons/im';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface navProps {
    activeTab: String;
    setActiveTab: any;
}

const nav: React.FC<navProps> = ({ setActiveTab, activeTab }) => {
    return (
        <nav>
            {/* <a className={activeTab === 'me' ? 'active' : ''} onClick={()=>setActiveTab('me')}><AiOutlineHome/></a> */}
            <a className={activeTab === 'about' ? 'active' : ''} title="About Me" onClick={() => setActiveTab('about')}>
                <AiOutlineUser />
            </a>
            <a
                className={activeTab === 'experience' ? 'active' : ''}
                title="Work and Education"
                onClick={() => setActiveTab('experience')}
            >
                <ImBriefcase />
            </a>
            <a className={activeTab === 'skills' ? 'active' : ''} title="Skills" onClick={() => setActiveTab('skills')}>
                <RiUserStarFill />
            </a>
            <a
                className={activeTab === 'contact' ? 'active' : ''}
                title="Contact"
                onClick={() => setActiveTab('contact')}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default nav;
