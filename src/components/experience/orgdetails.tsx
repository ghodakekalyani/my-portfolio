import React, { useState } from 'react';
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
import Vuesol from '../../assets/Vuesol.jpg';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import Rolesmodal from './Rolesmodal';

interface orgdetailsProps {
    setSelectedCard: any;
}

const Orgdetails: React.FC<orgdetailsProps> = ({ setSelectedCard }: orgdetailsProps) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const [modal, setModal] = useState<boolean>(false);
    const [orgModal, setOrgModal] = useState<string>('');

    const toggle = (organisation: string) => {
        setModal(!modal);
        setOrgModal(organisation);
    };
    return (
        <article className="experience__card details">
            <IoClose className="close-icon" onClick={() => setSelectedCard('')} />
            <Timeline position={matches ? 'alternate' : 'right'} className="timeline__content">
                <TimelineItem>
                    {matches && (
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" className="timeline-date">
                            <p>01/2020 - 09/2021</p>
                            <p>HSBC</p>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ backgroundColor: '#fff' }}>
                            <img className="organization__icon" src={HSBC} alt="me" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography
                            className="timeline-org-name link-style"
                            title="My Role & Responsibilities"
                            onClick={() => toggle('HSBC')}
                        >
                            Software Engineer
                        </Typography>
                        {!matches && <Typography className="timeline-date"> 01/2020 - 09/2021, HSBC</Typography>}
                        {modal && orgModal === 'HSBC' && (
                            <Rolesmodal isOpen={modal} toggle={toggle} organisation="HSBC" />
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
                            <p>02/2019 - 01/2020</p>
                            <p>Wipro Technologies</p>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ backgroundColor: '#fff' }}>
                            <img className="organization__icon" src={Wipro} alt="Wipro" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography
                            className="timeline-org-name link-style"
                            title="My Role & Responsibilities"
                            onClick={() => toggle('WIPRO2')}
                        >
                            Consultant
                        </Typography>
                        {!matches && (
                            <Typography className="timeline-date"> 02/2019 - 01/2020, Wipro Technologies</Typography>
                        )}
                        {modal && orgModal === 'WIPRO2' && (
                            <Rolesmodal isOpen={modal} toggle={toggle} organisation="WIPRO2" />
                        )}
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    {matches && (
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" className="timeline-date">
                            <p>08/2017 - 01/2019</p>
                            <p>Wipro Technologies</p>
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ backgroundColor: '#fff' }}>
                            <img className="organization__icon" src={Wipro} alt="Wipro" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography
                            className="timeline-org-name link-style"
                            title="My Role & Responsibilities"
                            onClick={() => toggle('WIPRO1')}
                        >
                            Associate Consultant
                        </Typography>
                        {!matches && (
                            <Typography className="timeline-date">08/2017 - 01/2019, Wipro Technologies</Typography>
                        )}
                        {modal && orgModal === 'WIPRO1' && (
                            <Rolesmodal isOpen={modal} toggle={toggle} organisation="WIPRO1" />
                        )}
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </article>
    );
};

export default Orgdetails;
