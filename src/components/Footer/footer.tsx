import React from 'react';
import './footer.less';

interface Props {}

const Footer = (props: Props) => {
    const {} = props;

    return (
        <footer style={{ color: 'gray', position: 'fixed', bottom: 0 }}>
            <a href="#" className="footer__logo">
                Kalyani_Ghodake
            </a>
        </footer>
    );
};

export default Footer;
