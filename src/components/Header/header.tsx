import React, { useState } from 'react';
import './header.less';
import HeaderSocials from './headerSocials';
import Nav from '../Nav/nav';
import { AboutMe } from '../about/aboutMe';
import Contact from '../contact/contact';
import Skills from '../skills/skills';
import Experience from '../experience/experience';
// import pdf from '../../assets/Kalyani_Ghodake_cv.pdf';
import pdf from '../../assets/Kalyani_Ghodake_resume.pdf';
interface headerProps {}

const header: React.FC<headerProps> = () => {
    const [activeTab, setActiveTab] = useState<String>('about');
    return (
        <>
            <header>
                <div className="container header_container">
                    <h5>Hello I'm</h5>
                    <h1>Kalyani Ghodake</h1>
                    <h5 className="text-light">
                        Fullstack Developer{' '}
                        <a href={pdf} download="kalyani_cv.pdf">
                            Download CV
                        </a>
                        <HeaderSocials />
                    </h5>
                    <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
                    <div className="header__content">
                        {activeTab === 'about' && <AboutMe />}
                        {activeTab === 'experience' && <Experience />}
                        {activeTab === 'skills' && <Skills />}
                        {activeTab === 'contact' && <Contact />}
                    </div>
                </div>
            </header>
        </>
    );
};

export default header;
