import React from 'react';
import './contact.less';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';

interface contactProps {}

const contact: React.FC<contactProps> = () => {
    return (
        <section id="contact">
            <h5>get In Touch</h5>
            <h2>contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>kalyanikghodake2013@gmail.com</h5>
                        <a href="mailto: kalyanikghodake2013@gmail.com" target="_blank">
                            send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className="contact__option-icon" />
                        <h4>Linkedin</h4>
                        <h5>Kalyani Ghodake</h5>
                        <a href="https://linkedin.com/in/kalyani-ghodake" target="_blank">
                            send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <IoLogoWhatsapp className="contact__option-icon" />
                        <h4>Cell Phone</h4>
                        <h5>+18182249534</h5>
                    </article>
                </div>

                {/* <form action="">
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form> */}
            </div>
        </section>
    );
};

export default contact;
