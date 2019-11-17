import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="form_contact">
     
   <form action="https://formspree.io/chirag3231@gmail.com"
  method="POST">
            <h1 className="form-h1">Write to us</h1>
            <h3 className="form-h3">Have any Question? We'd love to hear from you.</h3>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
        
           
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Your message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            /><br/>
            <div className="button">
             <Button>Submit</Button>
             </div>
            </form>
     </div>
 );
  
    
  }
}

export default ContactUs;
