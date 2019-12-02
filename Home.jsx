import React, {Component} from 'react';
import {Line} from "react-chartjs-2";
import Plans from "./Plans";
import {Select} from "antd";
import {companiesGET, plansGET, subscriberGET} from "../models/company";
import {Image} from "../images";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const _ = require('lodash');
let styles = {
  margin: 'auto',
  
};

//extends all the components which are available in react//
class Home extends Component {

  state = {
    companies: [],
    company: 1,
    plan_data: [],
    subscriber: [],
    bell: [],
    rogers: [],
    telus: [],
    freedom: [],
  
  };
  
//created variable for call back function for the graph
  get_data = () => {
    return {
      labels: _.range(2011, 2020),
    
      datasets: [
        {
          label: "BELL",
          data: this.state.bell,
          fill: false,
          borderColor: [
            "blue",
          ],
        },
         {
          label: "ROGERS",
          data: this.state.rogers,
          fill: false,
          borderColor: [
            "red",]
        }, 
        {
          label: "TELUS",
          data: this.state.telus,
          fill: false,
          borderColor: [
            "#00ff55",
          ]
        }, 
        {
          label: "FREEDOM",
          data: this.state.freedom,
          fill: false,
          borderColor: [
            "orange",
          ]
        },
        
  
      ]   
    }
  };
  
  //variable to get company id from database
  handlePlan = (company_id) => {
    plansGET(company_id) //getting plans with corresponding company id
      .then(response => {

        this.setState({plan_data: response.data})
      })
  };

  fetch = (params) => { //fetching data from database
    companiesGET()
      .then(response => {
        this.setState({companies: response.data})
      });
  };

  componentWillMount() { //mouting the graph 
    subscriberGET()
      .then(response => {
        const data = response.data,
          bell = _.map(_.filter(data, (o) => o.name === 'Bell'), 'subscribers'),
          rogers = _.map(_.filter(data, (o) => o.name === 'Rogers'), 'subscribers'),
          telus = _.map(_.filter(data, (o) => o.name === 'Telus'), 'subscribers'),
          freedom = _.map(_.filter(data, (o) => o.name === 'Freedom'), 'subscribers');
        this.setState({bell, rogers, telus, freedom});
      })
  }

  componentDidMount() { //changing state when graph is mounted
    this.fetch();
    this.handlePlan(this.state.company);
  }

  render() {
    const {company, plan_data, companies} = this.state;
    return (
      <div>
        {/* Creating Slider using Carousel Component of React */}
      <div style={styles}>
      <Carousel> 
        <div>
          <img src={Image.her_img}/>
         
        </div>
        <div>
          <img src={Image.slide_img} />
          
        </div>
        <div>
          <img src={Image.slide2_img} />
       
        </div>
        
      </Carousel>
    </div>

      
         {/* <div className="heroimage"><img src={Image.her_img} alt="img09"/></div> */}
   
        <div className="row section_bg_gray ">
          <div className="col-md-offset-2 col-md-8 home-agile-text">
            <h4>What We Do</h4>
            <p>Teleqo is a web application to help its users in selecting best network carrier in Canada according to their needs. A user can be a student, an employee, a corporate or related to any other field. They have different needs. </p>
          <p>Some of them are in search of best phone deals while others interested to know about ups and downs in major network carrier companies of Canada but most of them are interested in finding best network coverage in their own area or throughout Canada. So, Teleqo is a platform to help all of them.  
        </p>
          </div>
        </div>
        <div>
          
        <div className="row">
          <div className="col-md-offset-2 col-md-8 home-agile-text">
            <h4>Graphical comparison of subscribers</h4>
            <p>Teleqo provides a very unique feature that is graphical comparison of subscribers between Canada’s major network carriers. This can help you to understand the improvement in services provided by these network carriers to its users over a long period of time.<br></br>
            We have used the best website (Statista.com) to collect this data of real time live users of Canada’s major network carriers.
          </p>
          </div>
        </div>

      { /*Using LINE graph component from react components that we extended earlier */}

          <div className="row">
            <div className="col-md-offset-2 col-md-8 home-agile-text">
              <Line data={this.get_data}
              /> 
            </div>
          </div>
        </div>
        <div className="section_bg_gray">
        
          <div className="row">
          <div className="col-md-offset-2 col-md-8 home-agile-text ">
            <h4>How we get our plans</h4>
            <p>Are you worried about selecting phone plans? Our web app provides a platform to solve your problem. Find best plans for you according to your needs.
            <ul className="plans-info">
  <li>
  Are you worried about selecting phone plans? Our web app provides a platform to solve your problem. Find best plans for you according to your needs.
You can easily find

  </li>
  <li>
  Which network carrier provides perks, US/Canada calling and free international calling plans.

  </li>
  <li>	New phone deals with new or existing mobile networks.

  </li>
</ul>
</p>
          
        </div>
       </div>
       </div>
       {/* creating down list using SELECT component from react component */}
       <div className="section_bg_gray1">
          
            <div className="row">
              <div className="col-md-10">
                <div className="ptb-50">
                  <h2 className="text-center">Plans</h2>
                </div>
              </div>
              <div className="col-md-2">
                <div className="ptb-50 text-center">
                  <Select
                    defaultValue={1}
                    style={{width: 120}}
                    onSelect={this.handlePlan}
                  >
                    {companies.map((data, index) =>
                      <Select.Option key={index} value={data.id}>{data.name}</Select.Option>
                    )}
                  </Select>
                </div>  
             
            </div>
            <div className="container">
            <div className="row">
              {/* Creating card to show network plans */}
              {plan_data && plan_data.map((data, index) =>
                <Plans key={index} data={data}/>)
              }
              </div>
              
            </div>
          </div>
        </div>
        <div className="section_bg_gray">
          <div className="container">
          <div className="row">
          <div className="col-md-offset-2 col-md-8 home-agile-text newsletter ">
        <h4>Newsletter</h4>
            <p>Subscribe to our Newsletter</p>

            <div className="input-group">
              <input type="text" className="form-control" placeholder="Email"/>
              <span className="input-group-btn">
                      <button className="btn btn-default" type="button"><span
                        className="glyphicon glyphicon-envelope"/></button>
                    </span>
                    </div>
                    </div>
                    </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Home;
