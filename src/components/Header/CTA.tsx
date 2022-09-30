import React from 'react';
import Nav from '../Nav/nav';

interface CTAProps {
    
}

const CTA: React.FC<CTAProps> = () => {
    return (
        <div className='cta'>
            <a href='../../assets/kalyani_cv.pdf' download className='btn'>Download CV</a>
            {/* <a href="#contact" className='btn btn-primary'>Lets Talk</a> */}            
            <Nav/>
        </div>
    );
};

export default CTA;