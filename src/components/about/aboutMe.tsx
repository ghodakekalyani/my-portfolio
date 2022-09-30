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
            {/* <div className="container about__container"> */}
            <div className="container about__container">
                {/* <div className="about__cards">
                    <article className="about__card experince__card">
                        <CgAwards className="about__icon"/>
                        <h5>Experiance</h5>
                        <small>4 Years</small>
                    </article>
                    <article className="about__card">
                        <VscFolderLibrary className="about__icon"/>
                        <h5>Projects</h5>
                        <small>3 Completed</small>
                    </article>
                </div> */}
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
            {/* </div> */}
        </section>
    );
};
