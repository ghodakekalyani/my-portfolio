import React from 'react';
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
import Typography from '@mui/material/Typography';
import Wipro from '../../assets/Wipro.jpg';
import HSBC from '../../assets/HSBC.jpg';
import school from '../../assets/school.jpg';
import GPKP from '../../assets/GPKP.jpg';
import COEP from '../../assets/COEP.jpg';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

interface EducationProps {
    setSelectedCard: any;
}

const Education: React.FC<EducationProps> = ({ setSelectedCard }: EducationProps) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <article className="experience__card details">
            <IoClose className="close-icon" onClick={() => setSelectedCard('')} />
            <Timeline position={matches ? 'alternate' : 'right'} className="timeline__content">
                <TimelineItem>
                    {matches && (
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" className="timeline-date">
                            <p>2017</p>
                            <p>College of Engineering Pune</p>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ backgroundColor: '#fff' }}>
                            <img className="organization__icon" src={COEP} alt="COEP" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography className="timeline-org-name">BTech E&TC</Typography>
                        {!matches && (
                            <Typography className="timeline-date"> 2017, College of Engineering Pune</Typography>
                        )}
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    {matches && (
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                            className="timeline-date"
                        >
                            <p>2014</p>
                            <p>Government Polytechnic Kolhapur</p>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ backgroundColor: '#fff' }}>
                            <img className="organization__icon" src={GPKP} alt="GPKP" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography className="timeline-org-name">Diploma E&TC</Typography>
                        {!matches && (
                            <Typography className="timeline-date"> 2014, Government Polytechnic Kolhapur</Typography>
                        )}
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    {matches && (
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" className="timeline-date">
                            <p>2011</p>
                            <p>High School</p>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ backgroundColor: '#fff' }}>
                            <img className="organization__icon" src={school} alt="High School" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography className="timeline-org-name">10th</Typography>
                        {!matches && <Typography className="timeline-date"> 2011, High School</Typography>}
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </article>
    );
};

export default Education;
