import Typography from '@mui/material/Typography';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './aboutme.less';
import { CgAwards } from 'react-icons/cg';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';

export const AboutMe = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me" />
                    </div>
                </div>

                <div className="about__content">
                    <p>
                        Hello! I am a Full Stack Developer from India and currently living in USA, California. I am
                        passionate about creating interactive web applications. ywgjg wgyfjgj fewfwgj fuwejfweekfbwm
                        weefywjehff wefywgejf wfghw wfywgefj weefuwegf. wefguwegf wfewegfwef wefwfygwej e ewye wee wyed
                        wy u m,ui.
                    </p>
                </div>
            </div>
        </section>
    );
};
