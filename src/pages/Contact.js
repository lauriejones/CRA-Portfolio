import React, { Component } from 'react';
import SocialLinks from '../components/SocialLinks';

class Contact extends Component {
  render() {
    return (
      <div className="page page--contact">
        <div className="hero pa3 pa4-m pa5-l">
          <h2 className="f3 measure lh-copy">Contact</h2>
          <p className="measure f4 lh-copy">Send me an email: <a href="mailto:hello@lauriejones.me">hello@lauriejones.me</a></p>
          <SocialLinks/>
        </div>
      </div>
    );
  }
}

export default Contact;
