import React, { useState } from 'react';
import './header.less';
import CTA from './CTA';
import HeaderSocials from './headerSocials';
import ME from '../../assets/me.jpg';
import Nav from '../Nav/nav';
import { AboutMe } from '../about/aboutMe';
import Contact from '../contact/contact';
import Skills from '../skills/skills';
import Experience from '../experience/experience';

interface headerProps {}

const header: React.FC<headerProps> = () => {
    const [activeTab, setActiveTab] = useState<String>('contact');
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Kalyani Ghodake</h1>
                <h5 className="text-light">
                    Fullstack Developer{' '}
                    <a href="../../assets/kalyani_cv.pdf" download>
                        Download CV
                    </a>
                </h5>
                <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
                <HeaderSocials />
                <div className="header__content">
                    {/* {activeTab === 'me' && (
                        <>
                        <div className="me" id="me">
                            <img src={ME} alt="me" />
                        </div>
                        <p>
                        Hello! I am a Full Stack Developer from India and currently living in USA, California. I am passionate about creating interactive web applications.
                    </p>
                    </>
                    )} */}
                    {activeTab === 'about' && <AboutMe />}
                    {activeTab === 'experience' && <Experience />}
                    {activeTab === 'skills' && <Skills />}
                    {activeTab === 'contact' && <Contact />}
                </div>
            </div>
        </header>
    );
};

export default header;
