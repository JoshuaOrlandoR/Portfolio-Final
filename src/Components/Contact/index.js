import React, { useState } from 'react';
import './styles.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

    console.log("Service ID: ", process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log("Template ID: ", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log("User ID: ", process.env.REACT_APP_EMAILJS_USER_ID);
        
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            { subject: 'Contact Form Message', user_email: email, message },
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((result) => {
            console.log(result.text);
            setName("");
            setEmail("");
            setMessage("");
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div id="contact" className="contact-container">
            <div className="title-wrapper">
                <h2 className="contact-title">Contact</h2>
            </div>
            <div className="contact-wrapper">
                <form className="contact-form" onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
