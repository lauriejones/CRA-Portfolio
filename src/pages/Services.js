import React, { Component } from 'react';
import SocialLinks from '../components/SocialLinks';
import CtaSection from '../components/CtaSection';

class Services extends Component {
  render() {
    return (
      <div className="page page--services">
        <div className="hero pa3 pa4-m pa5-l">
          <h2 className="f1 measure lh-copy">Services</h2>
          <p className="measure f4 lh-copy">I am available for freelance work. I specialise in UI Engineering.</p>
          <p className="measure f5 lh-copy">At my day job I get to work in an agile, cross&ndash;functional team of amazingly talented people. However, my role is limited to development and I do not get to design.</p>
          <SocialLinks/>
        </div>
        <CtaSection heading="Title of CTA goes here" callout="Lorem ispum dolor sit amet." button="View My Services" url="#"/>
      </div>
    );
  }
}

export default Services;
