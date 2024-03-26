import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Home from './Home';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Router>
        <div className='start'>
          <img src="https://uploads-ssl.webflow.com/622b5f32e69caa8dd1db5ef6/624caa2018c7408693c5a542_phone-number-icon.svg" loading="lazy" width="35" alt="phone icon" className="image-7" />
          <h5>(773) 270 2777</h5>
          <a href="/contact">
            <button>Schedule Service</button>
          </a>
        </div>
        <nav>
          <Link to="/" className='link'>Home</Link>
          <Link to="/services" className='link'>Our Services</Link>
          <Link to="/contact" className='link'>Contact Us</Link>
        </nav>

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router><div className='section-footer'>
        <small>Copyright @2022 atappliancemaster.com</small>
      </div>
    </div >
  );
}

export default App;
