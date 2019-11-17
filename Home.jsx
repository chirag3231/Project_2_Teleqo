import React, {Component} from 'react';
import {Line} from "react-chartjs-2";
import Plans from "./Plans";
import {Select} from "antd";
import {company_data} from "../controller/dummy_db";
import {companiesGET, plansGET, subscriberGET} from "../models/company";

const _ = require('lodash');

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

  get_data = () => {
    return {
      labels: _.range(2010, 2020),

      datasets: [
        {
          label: "BELL",
          data: this.state.bell,
          fill: false,
          borderColor: [
            "red",
          ]
        }, {
          label: "ROGERS",
          data: this.state.rogers,
          fill: false,
          borderColor: [
            "#00ff55",]
        }, {
          label: "TELUS",
          data: this.state.telus,
          fill: false,
          borderColor: [
            "orange",
          ]
        }, {
          label: "FREEDOM",
          data: this.state.freedom,
          fill: false,
          borderColor: [
            "blue",
          ]
        },
      ]
      
    }
  };
  handlePlan = (company_id) => {
    plansGET(company_id)
      .then(response => {

        this.setState({plan_data: response.data})
      })
  };

  fetch = (params) => {
    companiesGET()
      .then(response => {
        this.setState({companies: response.data})
      });
  };

  componentWillMount() {
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

  componentDidMount() {
    this.fetch();
    this.handlePlan(this.state.company);
  }

  render() {
    const {company, plan_data, companies} = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-offset-2 col-md-8 home-agile-text">
            <h4>What We Do</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id
              est laborum.</p>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-md-offset-2 col-md-8 home-agile-text">
              <Line data={this.get_data}/>
            </div>
          </div>
        </div>
        <div className="section_bg_gray">
          <div className="container">
          <div className="row">
          <div className="col-md-offset-2 col-md-8 home-agile-text plans-class">
            <h4>How we get our plans</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id
              est laborum.</p>
          </div>
        </div>
       </div>
       </div>
       <div className="section_bg_gray1">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <div className="ptb-50" style={{paddingLeft: '25%'}}>
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
            </div>
            <div className="row">
              {plan_data && plan_data.map((data, index) =>
                <Plans key={index} data={data}/>)
              }
            </div>
          </div>
        </div>
        <div className="section_bg_gray">
          <div className="container">
          <div className="row">
          <div className="col-md-offset-2 col-md-8 home-agile-text plans-class">
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
