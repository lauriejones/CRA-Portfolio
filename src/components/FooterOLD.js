import React, { Component } from 'react';
import {Link} from 'react-router';
import Container from './Container';

class FooterOld extends Component {
  render() {
    return (
      <div className="bg-near-black silver f6 f5-ns">
        <Container className="flex justify-center flex-no-wrap">
          <Link to="/" className="flex-auto-ns tc no-underline hover-light-gray pa3">Home</Link>
          <Link to="/work" className="flex-auto-ns tc no-underline hover-light-gray bl-ns b--white-10 pa3">Work</Link>
          <Link to="/services" className="flex-auto-ns tc no-underline hover-light-gray bl-ns b--white-10 pa3">Services</Link>
          <Link to="/contact" className="flex-auto-ns tc no-underline hover-light-gray bl-ns b--white-10 pa3">Contact</Link>
        </Container>
      </div>
    );
  }
}

export default FooterOld;
