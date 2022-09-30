import React, { useState } from 'react';
import { CgAwards } from 'react-icons/cg';
import { VscFolderLibrary } from 'react-icons/vsc';
import { GiGraduateCap } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import './experience.less';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
} from '@mui/lab';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { SiWipro } from 'react-icons/si';
import Wipro from '../../assets/Wipro.jpg';
import HSBC from '../../assets/HSBC.jpg';
import Orgdetails from './orgdetails';
import Education from './Education';

interface experienceProps {}

const Experience: React.FC<experienceProps> = () => {
    const [selectedCard, setSelectedCard] = useState<String>('');

    return (
        <section id="experience">
            <h5>Get To Know</h5>
            <h2>Work and Education</h2>
            <div className="container experience__container">
                <div className="experience__cards">
                    <article
                        className={
                            selectedCard === 'experience' ? 'experience__card selected-card' : 'experience__card'
                        }
                        onClick={() => setSelectedCard('experience')}
                    >
                        <CgAwards className="experience__icon" />
                        <h5>Experiance</h5>
                        <small>4 Years</small>
                    </article>
                    <article
                        className={selectedCard === 'education' ? 'experience__card selected-card' : 'experience__card'}
                        onClick={() => setSelectedCard('education')}
                    >
                        <GiGraduateCap className="experience__icon" />
                        <h5>Education</h5>
                        <small>BTech - E&TC</small>
                    </article>
                </div>
                <div className="experience__cards-details">
                    {selectedCard === 'experience' && <Orgdetails setSelectedCard={setSelectedCard} />}
                    {selectedCard === 'education' && <Education setSelectedCard={setSelectedCard} />}
                </div>
            </div>
        </section>
    );
};

export default Experience;
