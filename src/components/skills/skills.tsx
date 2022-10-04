import React from 'react';
import './skills.less';
import { BiBadgeCheck } from 'react-icons/bi';

interface skillsProps {}

const Skills: React.FC<skillsProps> = () => {
    return (
        <section id="skills">
            <h5>What Skils I Have</h5>
            <h2>My Tech Stack</h2>

            <div className="container skills__container">
                <div className="skills__frontend">
                    <h3>Frontend Development</h3>
                    <div className="skills__content">
                        <article className="skills__details">
                            <BiBadgeCheck className="skills__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BiBadgeCheck className="skills__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BiBadgeCheck className="skills__details-icon" />
                            <div>
                                <h4>Javascript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BiBadgeCheck className="skills__details-icon" />
                            <div>
                                <h4>React JS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BiBadgeCheck className="skills__details-icon" />
                            <div>
                                <h4>Redux</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BiBadgeCheck className="skills__details-icon" />
                            <div>
                                <h4>Jest</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="skills__backend">
                    <h3>Backend Development</h3>
                    <div className="skills__content">
                        <article className="skills__details">
                            <BiBadgeCheck className="skills__details-icon" />
                            <div>
                                <h4>Node JS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BiBadgeCheck className="skills__details-icon" />
                            <div>
                                <h4>MY SQL</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BiBadgeCheck className="skills__details-icon" />
                            <div>
                                <h4>Mongo Db</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
