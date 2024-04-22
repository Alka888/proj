import image_one from './images/repairman.jpg';
import maskIcon from './images/maskicon.jpg';

function Home() {
    return (
        <div>
            <div className="background-image ">
                <div className="container">
                    <h1 className="large-title">AT Appliance Repair and Maintenance LLC</h1>
                    <p className="small-title">
                        If you are looking for <strong>dependable appliance specialists</strong> to take care of your kitchen & laundry appliances, look no further than AT Appliance Maintenance and Repair LLC
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
                <div className="grid-item">
                    <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/622b8f088e29853f7b79cb2e_Group%204.png" loading="lazy" width="60" alt="refrigerator" className="feature-icon-1" />
                    <h2>Refrigerator Repair</h2>
                    <p>We repair all common refrigerator problems, including leaks, noisy motors, and uneven cooling. With our help, you can rest assured that your refrigerator is in good hands.</p>
                </div>
                <div className="grid-item">
                    <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/622b8f081f7e1896d4d66c81_Group%2011.png" loading="lazy" width="60" alt="stove" className="feature-icon-3" />
                    <h2>Range & Stove Repair</h2>
                    <p>Your range is a vital part of your kitchen, and we are here to help you keep it in top working condition. We repair all common range problems, from cracked cooktops to malfunctioning self-clean cycles.</p>
                </div>
                <div className="grid-item">
                    <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/622b8ea7c1f70541e0cc3e3d_washer-repair-service.png" loading="lazy" width="60" alt="washer" className="feature-icon-4" />
                    <h2>Washer Repair</h2>
                    <p>When your washer breaks down, you need an expert to get it up and running again. That's where we come in. We'll have your machine running like new in no time. We're fast, reliable, and affordable, so call us today!</p>
                </div>
                <div className="grid-item">
                    <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/622b8f0894f2b715bc0002e6_Group%2010.png" loading="lazy" width="60" alt="" className="feature-icon-5" />
                    <h2>Oven Repair</h2>
                    <p>Whether your oven is not heating evenly or if the self-cleaning cycle isn't working correctly, our team of experienced technicians will be able to quickly diagnose and resolve the problem.</p>
                </div>
                <div className="grid-item">
                    <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/622b8f08f6538e9269ddf353_Group%203.png" loading="lazy" width="60" alt="" className="feature-icon-6" />
                    <h2>Dishwasher Repair</h2>
                    <p>Whether your dishwasher is leaking, not draining, or just isn't cleaning dishes like it used to, we'll diagnose the problem and find the most effective solution. Your dishwasher will be as good as new when we're finished.</p>
                </div>
                <div className="grid-item">
                    <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/622b8f08e0c5eb1273fc2dab_Group%202.png" loading="lazy" width="60" alt="" className="feature-icon-7" />
                    <h2>Dryer Repair</h2>
                    <p>Is your dryer on the fritz? Don't worry, our team is here to help. We offer reliable and affordable repair services for all types of dryers. Let us take care of your laundry woes - call us today!</p>
                </div>
            </div>


            <div className="section-service-area">
                <h2 className="service-area-title">Our Service Area</h2>

                <div className="first-column">
                    <h3 className="county-title">Cook County, IL</h3>
                    <li className="list-item-3">Arlington Heights</li>
                    <li className="list-item-3">Chicago</li>
                    <li className="list-item-3">Des Plaines</li>
                    <li className="list-item-3">Schaumburg</li>
                    <li className="list-item-3">Hoffman Estates</li>
                    <li className="list-item-3">Mt Prospect</li>
                    <li className="list-item-3">Palatine</li>
                    <li className="list-item-3">And More!</li>
                </div>

                <div className="second-column">
                    <h3 className="county-title">DuPage County, IL</h3>
                    <li className="list-item-3">Glendale Heights</li>
                    <li className="list-item-3">Lombard</li>
                    <li className="list-item-3">Downers Grove</li>
                    <li className="list-item-3">Wheaton</li>
                    <li className="list-item-3">Streamwood</li>
                    <li className="list-item-3">Hanover Park</li>
                    <li className="list-item-3">Bartlett</li>
                    <li className="list-item-3">And More!</li>
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
                    <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/62c41633d6de6ab6ed58768e_Straightforward-Pricing.png" className="gar_icon" loading="lazy" width="44" alt="icon" />
                    <span>Straightforward Pricing</span>

                    <p>No hidden fees & no surprises. We will always provide you the prices for our work before we begin.</p>

                    <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/62c41794a52d51ec8e12bb25_Guaranteed-Workmanship.svg" className="gar_icon" loading="lazy" width="30" alt="icon" />
                    <span>Guaranteed Work</span>
                    <p>Our technicians receive regular training to stay up to date with the ever-changing appliance repair industry</p>

                    <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/62c41832120e4b36c842a069_Personal%20Attention.svg" className="gar_icon" loading="lazy" width="30" alt="icon" />
                    <span>No Mess Left Behind</span>
                    <p>We make it our priority to leave your home cleaner than we found it. We treat your home like we would our own.</p>

                    <img src={maskIcon} className="gar_icon" width="38px" alt="maskIcon" />
                    <span>Covid-19 Responsible</span>
                    <p>All technicians before start work are screened in the office for COVID-19 symptoms. If the technician has one of the possible symptoms - he is not allowed to work.</p>
                </div>
            </div>

            <div className='city-contains'>
                <h3 className='city-header'>Frequently Asked Questions</h3>
                <h5>What is your service call fee?</h5>
                <p>The diagnostic and professional estimates are just $69 service fee. The first visit includes: visit of a qualified technician, full inspection and a diagnostic, the professional estimate, the best solution and advice.</p>
                <h5>Will the service fee be waived if I decide to repair?</h5>
                <p>Yes. The service fee applies to the total cost of repair. Meaning, when the diagnostic is complete and the issue is known, our technician will give you a quote for the repair, including labor and parts. If you decide to complete the repair with our company, we will waive the service fee. Therefore, you will only pay for the repair.</p>
                <h5>How are the prices for labor & parts determined?</h5>
                <p>We base our prices on industry standards. For costs on labor & parts, we refer to the “Appliance Blue Book” or as it is formerly known, The Original Blue Book, Major Appliance Job Rate Guide®. We strive to be competitive with our pricing by providing 10% lower than standard rates.</p>
            </div>
        </div >
    )
}

export default Home;