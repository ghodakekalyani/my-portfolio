import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface RolesmodalProps {
    isOpen: boolean;
    toggle: any;
    organisation: string;
}

const modalData = {
    HSBC: {
        organisation: 'HSBC',
        title: 'Software Engineer',
        description: (
            <ul>
                <li>Worked on stand-alone deployment tool for application running on distributed environments.</li>
                <li>Designed new screens using ReactJS, Bootstrap, matrialUI to enhanced user experience.</li>
                <li>
                    Designed Dashboard which provides an aggregated view of the overall observations and vulnerabilities
                    found in released items.
                </li>
                <li>Responsible for Integration of backend APIs with React front-end.</li>
            </ul>
        ),
    },
    WIPRO2: {
        organisation: 'Wipro Technologies',
        title: 'Consultant',
        description: (
            <ul>
                <li>
                    Worked as a Software Developer to manage platform for enterprise customers to manage business,
                    products and services for Telstra.
                </li>
                <li>Worked on Web, Mobile Web, Android and iOS platforms by implementing UI/UX designs.</li>
                <li>
                    Responsible for delivering end to end quality product following the Technical designs, Development,
                    Sanity Testing, Deployment Task.
                </li>
                <li>Designed REST APIs to integrate application with service now.</li>
                <li>Implemented Omniture tags into multiple services for sales analytics.</li>
                <li>
                    Implemented unit test cases using Jest and Enzyme for front-end and Mocha, Chai and Sinon for
                    backend.'
                </li>
            </ul>
        ),
    },
    WIPRO1: {
        organisation: 'Wipro Technologies',
        title: 'Associate Consultant',
        description: (
            <ul>
                <li>
                    Worked on a dashboard which provides Business Metrics such as Lead/Cycle Time, Incidents, Code
                    Commits.
                </li>
                <li>
                    It provides Leadership team with continuous tracking of Agile Transformation Drive progress
                    throughout Telstra.
                </li>
                <li>Designed UI using ReactJS, Bootstrap, ChartJS and Database schemas using Sequelize ORM.</li>
                <li>Responsible for Integration of backend APIs with React front-end.</li>
                <li>Worked on Microservice Architecture using Docker and SQS consumers.</li>
                <li>Integrated application with NewRelic Application Monitoring Tool.</li>
            </ul>
        ),
    },
};

const Rolesmodal: React.FC<RolesmodalProps> = ({ toggle, isOpen, organisation }: RolesmodalProps) => {
    return (
        <div>
            <Modal isOpen={true} toggle={toggle} className="roles__modal">
                <ModalHeader toggle={toggle}>
                    {modalData[organisation].title} @ {modalData[organisation].organisation}
                </ModalHeader>
                <ModalBody>{modalData[organisation].description}</ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Rolesmodal;
