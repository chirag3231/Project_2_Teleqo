import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }


  render() {
    const { status } = this.state;
    return (
      <div className="form_contact">
        <h1 className="form-h1">Write to us</h1>
   <h3 className="form-h3">Have any Question? We'd love to hear from you.</h3>
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xwkpnodd"
        method="POST"
      >
       
        <label className="email">Email:</label>
        <input type="email" name="email" className="emailtext"/><br></br>
        <label className="message">Message:</label>
        <textarea name="message" className="messagetext" /><br></br>
        {status === "SUCCESS" ? <p>Thanks!</p> : <Button type="submit">Submit</Button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </div>
    );
  }

}
export default ContactUs;


