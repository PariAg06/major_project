import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/img/PredictHealth.png";
import './Navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () => {
  const [showDiseases, setShowDiseases] = useState(false); // State to manage dropdown visibility

  // List of diseases
  const diseasesList = [
    'Cancer',
    'Diabetes',
    'Heart Disease',
    'Alzheimer\'s',
    'Asthma'
  ];

  return (
    <div className='header'>
      <div>
        <a href="/">
          <img className="logo" alt="logo" src={Logo} />
        </a>
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/signup">SIGNUP</Link></li>

          {/* Dropdown for Diseases */}
          <li className="diseases-dropdown">
              <NavDropdown title="Diseases" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Heart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Breast Cancer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Diabetes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Brain Tumor</NavDropdown.Item>
            </NavDropdown>
                  </li>
                
              </ul>
            
        
      </div>
    </div>
  );
}

export default Navbar;
