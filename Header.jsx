import React, { Component } from 'react';
import logo from './logo.png';
import './style.css';

class Header extends Component {
    render() {
  return (
    <header>
      <div><img src={logo} class="logo" alt="logo" /></div>
        {/* <img class="logo" src="./logo.jpg" alt="logo"> */}
        <div><nav>
            <ul class="navbar">
                <li><a href="home.jsx">Home</a></li>
                <li><a href="coverage.jsx">Coverage</a></li>	
                <li><a href="about.jsx">About us</a></li>
                <li><a href="contact.jsx">Contact us</a></li>
            </ul>
        </nav>
        </div>
      </header>
  );
}
}

export default Header;










































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































