import { useState } from 'react';
import { dataforappl } from './dataforappl';
import { questiondata } from './questiondata';
import './App.css';

import image_one from './images/repairman.jpg';
import maskIcon from './images/maskicon.jpg';


function Home() {

    const [appliance, setAppliance] = useState(dataforappl)
    const [question, setQuestion] = useState(questiondata)

    return (
        <div>
            <div className="background-image ">
                <div className="container">
                    <h1 className="large-title">AT Appliance Repair and Maintenance</h1>
                    <p className="small-title">
                    Is a family-owned business, we specialize in repairing household appliances.
                    At AT Appliance Repair and Maintenance, we want to help take that stress away by being your dependable partner. Our goal is to provide you with respectful, expert repair services tailored to your needs.
                    Choose AT Appliance Repair and Maintenance for safe and professional appliance repairs.
                        <br />
                        <a href="/contact">
                            <button>Schedule Service</button>
                        </a>
                    </p>
                </div>
            </div>

            <div className="repair-serives">
                <h2>Your comfort is our bussiness</h2>
                <h3>Residential & Commercial Repair Services</h3>
            </div>

            <div className="grid-container">
                {appliance.map((item => {
                    const {id, name, description, image} = item;
                    return (
                            <div className="grid-item">
                            <img src={image} loading="lazy" width="60" alt="refrigerator" className="feature-icon-1" />
                            <h2>{name}</h2>
                            <p>{description}</p>
                            </div>
                    )
                }))}
            </div>


            <div className="section-service-area">
                <h2 className="service-area-title">Our Service Area</h2>

                <div className="first-column">
                    <h3 className="county-title">Cook County, IL</h3>
                    <ul>
                        <li className="list-item-3">Arlington Heights</li>
                        <li className="list-item-3">Chicago</li>
                        <li className="list-item-3">Des Plaines</li>
                        <li className="list-item-3">Schaumburg</li>
                        <li className="list-item-3">Hoffman Estates</li>
                        <li className="list-item-3">Mt Prospect</li>
                        <li className="list-item-3">Palatine</li>
                        <li className="list-item-3">And More!</li>
                    </ul>
                </div>

                <div className="second-column">
                    <h3 className="county-title">DuPage County, IL</h3>
                    <ul>
                        <li className="list-item-3">Glendale Heights</li>
                        <li className="list-item-3">Lombard</li>
                        <li className="list-item-3">Downers Grove</li>
                        <li className="list-item-3">Wheaton</li>
                        <li className="list-item-3">Streamwood</li>
                        <li className="list-item-3">Hanover Park</li>
                        <li className="list-item-3">Bartlett</li>
                        <li className="list-item-3">And More!</li>
                    </ul>
                </div>
            </div>

            <div className="brand-list">
                <h3 className="heading-title">DEPENDABLE APPLIANCE REPAIR TEAM
                    <br />
                    <span>Repair & Maintenance Services for All Major Appliance Brands</span>
                </h3>

                <p className="brands-list">Our technicians are highly trained in the repair and maintenance of all major appliance brands and models, so you can rest assured that your broken dishwasher or dryer will be back up and running in no time. With our years of experience and commitment to customer service, we'll have your appliances working like new in no time. Call us today!</p>
                <img src={image_one} className="repairman" alt="repairman" />
                <br />

                <ul className='brands-home'>
                    <li className="brand-item">Thermador</li>
                    <li className="brand-item">Miele</li>
                    <li className="brand-item">Bosch</li>
                    <li className="brand-item">LG</li>
                    <li className="brand-item">Wolf</li>
                    <li className="brand-item">Samsung</li>
                    <li className="brand-item">Sub-Zero</li>
                    <li className="brand-item">Whirlpool</li>
                    <li className="brand-item">Viking</li>
                    <li className="brand-item">Jenn Air</li>
                    <li className="brand-item">Dacor</li>
                    <li className="brand-item">Kitchen Aid</li>
                    <li className="brand-item">Bertazzoni</li>
                    <li className="brand-item">Frigidaire</li>
                    <li className="brand-item">US Range</li>
                    <li className="brand-item">Electrolux</li>
                    <li className="brand-item">Garland</li>
                    <li className="brand-item">GE</li>
                </ul>
            </div>

            <div className='info-toprow'>
                <h2 className='garantee-title'>Appliance Repair Problems solved Right the First Time!</h2>
                <h2 className='garantee-title'>YOUR SATISFACTION GUARANTEED!</h2>
                <p>With so many appliances in the average home, it's not surprising that something will eventually break down and need to be fixed. Whether it's your oven, dishwasher, or washing machine, having a reputable repair service that you can trust will make life a lot easier. AT Appliance Repair and Maintenance LLC is here to help you keep your appliances running smoothly. We offer a wide range of services for all major appliances, including fridge repair, dishwasher repair, washer and dryer repair, oven repair, stove and range repair.</p>

                <div className='sat-info'>
                    {question.map((item => {
                        const {id, name, image, description} = item;
                        return (
                            <div>
                            <img src={image} className="gar_icon" loading="lazy" width="44" alt="icon"/>
                            <span>{name}</span>
                            <p>{description}</p>
                            </div>
                        )
                    }))}

                    <img src={maskIcon} className="gar_icon" width="38px" alt="maskIcon" />
                    <span>Covid-19 Responsible</span>
                    <p>All technicians before start work are screened in the office for COVID-19 symptoms. If the technician has one of the possible symptoms - he is not allowed to work.</p>
                </div>
            </div>

            <div className='city-contains'>
                <h3 className='city-header'>Frequently Asked Questions</h3>
                <h5>What is your service call fee?</h5>
                <p>The diagnostic and professional estimates are just $79 service fee. The first visit includes: visit of a qualified technician, full inspection and a diagnostic, the professional estimate, the best solution and advice.</p>
                <h5>Will the service fee be waived if I decide to repair?</h5>
                <p>Yes. The service fee applies to the total cost of repair. Meaning, when the diagnostic is complete and the issue is known, our technician will give you a quote for the repair, including labor and parts. If you decide to complete the repair with our company, we will waive the service fee. Therefore, you will only pay for the repair.</p>
                <h5>How are the prices for labor & parts determined?</h5>
                <p>We base our prices on industry standards. For costs on labor & parts, we refer to the “Appliance Blue Book” or as it is formerly known, The Original Blue Book, Major Appliance Job Rate Guide®. We strive to be competitive with our pricing by providing 10% lower than standard rates.</p>
            </div>
        </div >
    )
}

export default Home;