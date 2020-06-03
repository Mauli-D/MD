import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as emailjs from 'emailjs-com'


class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  handleSubmit(e) {
      e.preventDefault()
      const {name, email, message } = this.state
      let templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Maulika',
        message_html: message,
      }
      emailjs.send(
        'gmail',
        'template_ben6vShB',
        templateParams,
        'user_wcuXz0TuZLPcDCv7Yn4TQ'
      ).then((response) => {
        ReactDOM.render(<div class="alert alert-success alert-dismissible fade show">
        <strong>Success! </strong>Your message has been sent successfully.</div>, document.getElementById('success'));
        },
        (error) => {
          console.log("error");
        }
      )
      this.resetForm()
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
      this.setState({ [param]: e.target.value })
    }
  render() {
    return (
      <section id="contact" className="contentsection">
        <div className="container">
          <div className="row"> 
            <div className="col-6 mx-auto text-center">
              <h2 className="text-uppercase text-white">Contact</h2>
              <div id="success" className="p-3"></div>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" name="name" value={this.state.name}
                  onChange={this.handleChange.bind(this, 'name')} placeholder="Name" required/>
                <input type="text" name="email" value={this.state.email}
                  onChange={this.handleChange.bind(this, 'email')} placeholder="Email" required/>
                <textarea type="textarea" name="message" value={this.state.message}
                  onChange={this.handleChange.bind(this, 'message')} placeholder="Message.." />
                <input className="button" type="submit" id="submit" value="SUBMIT" />
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default ContactForm;