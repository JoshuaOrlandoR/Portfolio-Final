import React from 'react';
import './styles.css';

const Contact = () => {
    return (
        <div id="contact" className="contact-container">
            <div className="title-wrapper">
                <h2 className="contact-title">Contact</h2>
            </div>
            <div className="contact-wrapper">
                <form className="contact-form">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
