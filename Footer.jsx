  import React, { Component } from 'react';
import logofooter from './logofooter.png';
import './style.css';

class Footer extends Component {
    render() {
  return (
    <footer>
      <div><img src={logofooter} class="logofooter" alt="logo" /></div>
      <div><nav>
            <ul class="navbarfooter">
            <li><a href="home.jsx">Home</a></li>
                <li><a href="coverage.jsx">Coverage</a></li>	
                <li><a href="about.jsx">About us</a></li>
                <li><a href="contact.jsx">Contact us</a></li>
            </ul>
        </nav>
        </div>
        <div id="copy">&copy;2019</div>
    </footer>
  );
}
}

export default Footer;