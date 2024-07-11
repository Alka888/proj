import './styles/Contact.css'
import React, { useState } from 'react';
// import ReCAPTCHA from "react-google-recaptcha";
import { useFormspark } from "@formspark/use-formspark";


const FORMSPARK_FORM_ID = 'uitzl5GUM';
// const FORMSPARK_ACTION_URL = `https://submit-form.com/${FORMSPARK_FORM_ID}`;

function Contact() {
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

    // const recaptchKey = '6LfhQlApAAAAAIkPHYYNbOIsa512Tfa2Yzmp5mV8';
    // const recaptchRef = useRef();

    // const [recaptchToken, setRecaptchToken] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone]= useState('')
    const [zipcode, setZipcode]= useState('')
    const [message, setMessage]= useState('')


    const submitForm = async (e) => {
        e.preventDefault();
        await fetch('https://submit-form.com/TmyRjBgh7', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            zipcode,
            message,
          }),
        });
        alert("Form submitted");
      };

    // const updateRecaptchaToken = (token) => {
    //     console.log(token)
    //     setRecaptchToken(token);
    // }

    return (
        <div>
            <div >
            <h1 className='contact-greeting'>Get in Touch</h1>
            </div>
                
            <div className='w-layout-grid cta-component contact-us'>
                <div className="grid-container-2">
                    <p className='contact-text'>Our Location</p>
                    <p>277 E Alpine Dr, Glendale Heights IL, 60139</p>
                    <p className='contact-text'>Contact Information</p>
                    <p className='contact-info'>Please don’t hesitate to contact us about all of your appliance repair needs. We will be happy to schedule a convenient appointment for you and our experienced technician.</p>
                    <p className='contact-info'><strong>(773) 270 2777</strong></p>
                    <p><a href="#">altantransit@gmail.com</a></p>
                    <div>
                        <p className='contact-text'>Working Hours</p>
                        <p className='contact-info'>
                            Monday - Sunday:
                            <br />
                            6:00am - 8pm
                        </p>
                    </div>
                </div>

                <div className='enquiry-form-wrapper'>
                    <h2>Talk to an Expert Today!</h2>
                    <p>Call us at  <strong>(773) 270 2777</strong>, or fill out the form to request a call back. We will reach out in 5-7 min.</p>

                    {message && (<div className={`${message.class}`}>
                        {message.text}
                    </div>
                    )}

                    <form onSubmit={submitForm} className="enquiry-form-wrapper">
                        <div>
                            <label htmlFor='name'>Full Name</label>
                            <textarea
                                placeholder='Full Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input w-input" maxLength="50"
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor='email'>Email</label>
                            <textarea
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input w-input" maxLength="256"
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor='phone'>Phone</label>
                            <textarea
                                placeholder='Phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="input w-input" maxLength="256"
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor='zipcode'>Zipcode</label>
                            <textarea
                                placeholder='Zipcode'
                                value={zipcode}
                                onChange={(e) => setZipcode(e.target.value)}
                                className="input w-input" maxLength="256"
                            >
                            </textarea>
                        </div>

                        <div>
                            <label htmlFor='message'>Message</label>
                            <textarea 
                                placeholder='Message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="input w-input" maxLength="256"
                            >
                            </textarea>
                        </div>

                        {/* <ReCAPTCHA
                            ref={recaptchRef}
                            sitekey={recaptchKey}
                            onChange={updateRecaptchaToken}>
                        </ReCAPTCHA> */}

                        <button
                            type="submit"
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