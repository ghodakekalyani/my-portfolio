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
                        Hello! I am a Full Stack Developer with 4 years of experience and currently living in USA,
                        California. I am passionate about creating interactive web applications. I enjoy coding, testig
                        and integrations. Able to effectively self manage individual projects as well as collaborate as
                        a part of a productive team.
                    </p>
                </div>
            </div>
        </section>
    );
};
