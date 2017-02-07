import React, { Component } from 'react';
// import {Link} from 'react-router';
import CtaSection from '../../../components/CtaSection';
import WorkNav from '../../../components/WorkNav';
import SocialLinks from '../../../components/SocialLinks';

class HilliersAdvisors extends Component {
  render() {
    return (
      <div className="page page--project">
        <div className="pa5" style={{backgroundColor: "#003d5f"}}>
          <h1 className="white normal tc">Skelton Consulting</h1>
        </div>

        <div className="pa3 pa4-m pa5-l">
          <h2 className="measure lh-copy">Skelton Consulting</h2>
          <p className="measure lh-copy">Im Laurie Jones and making things for the web is my passion. I am fortunate enough to be able to do what I love for a living. I am currently a front-end developer at <a className="rainbow-text" href="https://www.nib.com.au" target="_blank">nib Health Funds</a>.</p>
          <p className="measure lh-copy">At my day job I get to work in an agile, cross&ndash;functional team of amazingly talented people. However, my role is limited to development and I do not get to design.</p>
          <SocialLinks/>
        </div>

        <WorkNav/>

        <CtaSection
          heading="See what I can do for you."
          url="/contact"
          button="Contact Me"
        />
      </div>
    );
  }
}

export default HilliersAdvisors;
