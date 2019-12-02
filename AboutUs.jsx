import React, {Component} from 'react';
import {Image} from "../images";

 

class AboutUs extends Component {
  
  render() {
    return (
      <div>
      <div className="row ">
        <div className="col-md-offset-2 col-md-8 home-agile-text">
          <h4>About Us</h4>
          <p>We are providing them solution that they can check the graphical representation of users connected to different network carriers.They can check the signal strength in different areas through coverage map and they can compare the plans of different mobile network service providers. We are a service that provides a platform for users to select plans based on graphical comparisons of users connected to different networks,their plans and signal strength.</p>
        </div>
      </div>
      <div className="row mission-row">
        <div className="col-md-offset-2 col-md-8 home-agile-text mission">
          <h4>Our Mission</h4>
          <p>Firstly, this concept is new but it has a good future as more and more people are migrating to Canada and they are finding difficulty in selecting network carriers ,so we are expecting more and more users.<br></br>Secondly,this is the platform for network companies to connect more and more users to their networks and we will provide them access to our data analysis on monthly subscription basis.Thus,this is a good opportunity for investors to get good returns. </p>
        </div>    
        <div className="col-md-offset-2 col-md-8 home-agile-text team">
          <h4>Our Team</h4>
          
          <div className="teammate">
          <div classNam="team-member">
            <div className="member-images">
          <img src={Image.chirag}/>
          </div>
          <div className="member-role">
            <h5>Chirag Goyal</h5>
            <p>Project Manager Backend Developer</p>
            </div>
          </div>

          <div classNam="team-member">
            <div className="member-images">
          <img src={Image.sandeep}/>
          </div>
          <div className="member-role">
            <h5>Sandeep Singh</h5>
            <p>Lead UX/UI Designer</p>
            </div>
          </div>

          <div classNam="team-member">
            <div className="member-images">
          <img src={Image.prabhjot}/>
          </div>
          <div className="member-role">
            <h5>Prabhjot Singh</h5>
            <p>UX Designer</p>
            </div>
          </div>

          <div classNam="team-member">
            <div className="member-images">
          <img src={Image.gurjant}/>
          </div>
          <div className="member-role">
            <h5>Gurjant Singh</h5>
            <p>UX Designer</p>
            </div>
          </div>

          <div classNam="team-member">
            <div className="member-images">
          <img src={Image.harpreet}/>
          </div>
          <div className="member-role">
            <h5>Harpreet Kaur</h5>
            <p>Lead Frontend Developer</p>
            </div>
          </div>

          <div classNam="team-member">
            <div className="member-images">
          <img src={Image.jaspreet}/>
          </div>
          <div className="member-role">
            <h5>Jaspreet Kaur</h5>
            <p>Frontend Developer</p>
            </div>
          </div>

          <div classNam="team-member">
            <div className="member-images">
          <img src={Image.vijay}/>
          </div>
          <div className="member-role">
            <h5>Vijay Kumar</h5>
            <p>Frontend Developer</p>
            </div>
          </div>




          </div>
          
            </div>
          </div>
      </div>
     

    );
  }
}

export default AboutUs;
