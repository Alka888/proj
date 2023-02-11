import './styles/Contact.css'
import React, { FormEvent, useState, useRef } from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
    const formId = '8c4duwxO';
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const recaptchKey = '6Ld1VmAkAAAAAJ59ooo-XwLg7glo0BLdq1ZXmHYB';
    const recaptchRef = useRef();


    const initialFormState = {
        email: '',
        name: '',
        message: '',
        phone: '',
        zipcode: '',
    }

    const [formState, setFormState] = useState(initialFormState);
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState();
    const [recaptchToken, setRecaptchToken] = useState();


    const submitForm = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    }

    const postSubmission = async () => {
        const payload = {
            ...formState,
            "g-recaptcha-response": recaptchToken
        };


        try {
            const result = await axios.post(formSparkUrl, payload);
            console.log(result);
            setMessage({
                class: 'background: blue',
                text: 'Thanks, someone will be in touch shortly!'
            });
            setFormState(initialFormState);
            recaptchRef.current.reset();
        } catch (error) {
            console.log(error);
            setMessage({
                class: 'background: red',
                text: 'Sorry, there was a problem. Please try again or contact support.'
            })
        }
    };

    const updateFormControl = (event) => {
        const { id, value } = event.target;
        const formKey = id;
        const updatedFormState = { ...formState };
        updatedFormState[formKey] = value;
        setFormState(updatedFormState);
    }

    const updateRecaptchaToken = (token) => {
        console.log(token)
        setRecaptchToken(token);
    }

    return (
        <div>
            <div className='w-layout-grid cta-component contact-us'>
                <div className="grid-container-2">
                    <h1>Contact Us</h1>
                    <p className='contact-text'>Schedule Your Service</p>
                    <p className='contact-info'>If you are looking to <strong>schedule an appointment</strong>, or simply want to ask a question, fill out the contact form and one of our cutomer representatives will reach out to you in 5 - 7 minutes during regular hours.</p>
                    <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/624caa2018c7408693c5a542_phone-number-icon.svg" loading="lazy" alt="" width="45" className="image-3"></img>
                    <h5 className='c-title'>(646) 575 8297</h5>

                    <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/624caa20f4d69c1d5e5aad97_hours-icon.svg" loading="lazy" width="45" alt="" className="image-3"></img>

                    <div>
                        <p className='c-text'>
                            Monday - Sunday:
                            <br />
                            6:00am - 8pm
                        </p>

                    </div>

                    <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/624caa20edcf8687c7648937_email-icon.svg" loading="lazy" width="45" alt="" className="image-3"></img>

                    <a href="#">altantransit@gmail.com</a>

                    <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/624caa200a06fd38d1e77d82_address-icon.svg" loading="lazy" width="45" alt="" className="image-3"></img>

                    <a href="https://goo.gl/maps/tnJfWH1HjvrN4DGs6" target="_blank">277 E Alpine Dr, Glendale Heights, IL 60139, United States</a>
                </div>

                <div className='enquiry-form-wrapper'>
                    <h2>Talk to an Expert Today!</h2>
                    <p>Call us at  <strong>(646) 575 8297</strong>, or fill out the form to request a call back. Our customer service agent will reach out in 5-7 min.</p>

                    {message && (<div className={`${message.class}`}>
                        {message.text}
                    </div>
                    )}

                    <form onSubmit={submitForm} className="enquiry-form-wrapper">
                        <div>
                            <label htmlFor='name'>Full Name</label>
                            <input
                                onChange={updateFormControl}
                                type="text"
                                id="name"
                                value={formState.name}
                                className="input w-input" maxLength="256"
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor='email'>Email</label>
                            <input
                                onChange={updateFormControl}
                                type="text"
                                id="email"
                                value={formState.email}
                                className="input w-input" maxLength="256"
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor='phone'>Phone</label>
                            <input
                                onChange={updateFormControl}
                                type="text"
                                id="phone"
                                value={formState.phone}
                                className="input w-input" maxLength="256"
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor='zipcode'>Zipcode</label>
                            <input
                                onChange={updateFormControl}
                                type="text"
                                id="zipcode"
                                value={formState.zipcode}
                                className="input w-input" maxLength="256"
                            >
                            </input>
                        </div>

                        <div>
                            <label htmlFor='message'>Message</label>
                            <textarea id="message"
                                onChange={updateFormControl}
                                value={formState.message}
                                className="input w-input" maxLength="256"
                            >
                            </textarea>
                        </div>

                        <ReCAPTCHA
                            ref={recaptchRef}
                            sitekey={recaptchKey}
                            onChange={updateRecaptchaToken}>
                        </ReCAPTCHA>

                        <button
                            disabled={submitting}>
                            {submitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Contact;