import React, {Component} from 'react';
import {Image} from "../images";
import Gallery from 'react-grid-gallery';
 
const IMAGES =
[{
        src: Image.chirag,
        thumbnail: Image.chirag,
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        orientation:0,
        maxRows:1,
        
        isSelected:false,
        Caption: "Chirag Goyal",
        thumbnailCaption: (<span style={{color: "#062A78"}}><strong>Chirag Goyal</strong><br></br> Project Manager <br></br>Backend Developer</span>)
        
},
{
        src: Image.sandeep,
        thumbnail: Image.sandeep,
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        //tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        thumbnailCaption: "Sandeep Singh",
        thumbnailCaption: (<span style={{color: "#062A78"}}><strong>Sandeep Singh</strong><br></br> Lead UX/UI Designer</span>)
},
 
{
        
  src: Image.prabhjot,
        thumbnail: Image.prabhjot,
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        //tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        thumbnailCaption: "Pabhjot Singh",
        thumbnailCaption: (<span style={{color: "#062A78"}}><strong>Prabhjot Singh</strong><br></br> UX Designer</span>)
},
{
        
  src: Image.gurjant,
        thumbnail: Image.gurjant,
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        //tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        thumbnailCaption: "Gurjant Singh",
        thumbnailCaption: (<span style={{color: "#062A78"}}><strong>Gurjant Singh</strong><br></br>UI Designer & QA</span>)
}
,
{
        
  src: Image.harpreet,
        thumbnail: Image.harpreet,
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        //tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        Caption: "Harpreet Kaur",
        thumbnailCaption: (<span style={{color: "#062A78"}}><strong>Harpreet Kaur</strong><br></br> Lead FrontEnd Developer</span>)
}
,
{
        
  src: Image.jaspreet,
        thumbnail: Image.jaspreet,
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        //tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        thumbnailCaption: "Jaspreet Kaur",
        thumbnailCaption: (<span style={{color: "#062A78"}}><strong>Jaspreet Kaur</strong><br></br>  FrontEnd Developer</span>)
}
,
{
        
  src: Image.vijay,
        thumbnail: Image.vijay,
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        //tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        thumbnailCaption: "Vijay Kumar",
        thumbnailCaption: (<span style={{color: "#062A78"}}><strong>Vijay</strong><br></br>FrontEnd Developer</span>)
}
]
class AboutUs extends Component {
  
  render() {
    return (
      <div>
      <div className="row ">
        <div className="col-md-offset-2 col-md-8 home-agile-text">
          <h4>About Us</h4>
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
      <div className="row mission-row">
        <div className="col-md-offset-2 col-md-8 home-agile-text mission">
          <h4>Our Mission</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id
            est laborum.</p>
        </div>    
        <div className="col-md-offset-2 col-md-8 home-agile-text team">
          <h4>Our Team</h4>

          <Gallery images={IMAGES}
          enableLightbox={false}
          enableImageSelection={false}
          backdropClosesModal={false}
          />
          
        </div>
      
      </div>
      </div>

    );
  }
}

export default AboutUs;
