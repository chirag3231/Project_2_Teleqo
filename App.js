import React from 'react';

import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import Coverage from "./components/Coverage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/font-awesome.css';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Header/>
      <Route path="/" exact component={Home}/>
      <Route path="/coverage/" component={Coverage}/>
      <Route path="/about-us/" component={AboutUs}/>
      <Route path="/contact-us/" component={ContactUs}/>
      <Footer/>
    </Router>
  );
}

export default App;
