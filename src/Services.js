import { useState } from 'react';
import { data } from './data';
import './styles/Services.css'

function Services() {

    const [service, setService] = useState(0);
    const { id, name, description, image } = data[service];
    const [showMore, setShowMore] = useState(false);

    const previousService = () => {
        setService((service => {
            service--;
            if (service < 0) {
                return data.length - 1;
            }
            return service;
        }))
    }

    const nextService = () => {
        setService((service => {
            service++;
            if (service > data.length - 1) {
                service = 0;
            }
            return service;
        }))
    }

    return (
        <div>
            <div className='service-container'>
                <img src={image} className="services-image" alt="service" />
            </div>
            <div className='service-container'>
                <h1 className='service-title'>{name}</h1>
            </div>

            <div className='service-container'>
                <p className='service-text'>{showMore ? description : description.substring(0, 260) + "..."}
                    <button onClick={() => setShowMore(!showMore)} className='showmore-button'>{showMore ? "Show Less" : "Show More"}</button></p>

            </div>

            <div className='btn service-container'>
                <button onClick={previousService}>Previous</button>
                <button onClick={nextService}>Next</button>
            </div>

            <div>
                <h1 className='service-title'>Technicians You Can Rely On</h1>
                <h3 className='service-title'>Servicing All Major Refrigerator Brands & Models</h3>
                <p className='service-title'><strong>AT Appliance Repair and Maintenance LLC</strong>, we are dedicated to providing our customers with the best possible service. We understand that your refrigerator is one of the most important appliances in your home, and we strive to provide prompt, efficient service that will get your fridge back up and running in no time. We are factory trained and certified to work on all major brands and models of refrigerators, including Samsung, LG, GE, Whirlpool, Maytag, and more. We also offer a comprehensive warranty on all of our repairs, so you can be confident that your appliance is in good hands. Give us a call today to schedule a repair appointment. We look forward to serving you!</p>
            </div>
        </div>
    );
}


export default Services;