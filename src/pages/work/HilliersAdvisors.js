import React, { Component } from 'react';
import {Link} from 'react-router';
import SocialLinks from '../../components/SocialLinks';
import CtaSection from '../../components/CtaSection';

class HilliersAdvisors extends Component {
  render() {
    return (
      <div className="page page--project">
        <div className="hero pa3 pa4-m pa5-l">
          <h2 className="v2-title--1 measure lh-copy">Hillier's Advisors</h2>
          <p className="measure lh-copy v2-copy v2-copy--large">I'm Laurie Jones and making things for the web is my passion. I am fortunate enough to be able to do what I love for a living. I am currently a front-end developer at <a className="rainbow-text" href="https://www.nib.com.au" target="_blank">nib Health Funds</a>.</p>
          <p className="measure v2-copy lh-copy">At my day job I get to work in an agile, cross&ndash;functional team of amazingly talented people. However, my role is limited to development and I do not get to design.</p>
          <SocialLinks/>
        </div>
        <CtaSection heading="Title of CTA goes here" callout="Lorem ispum dolor sit amet." button="View My Services" url="#"/>
        <div className="pa3 flex justify-between items-center ">
          <Link to="work">👈 Previous</Link>
          <Link to="work">Back to work</Link>
          <Link to="work">Next 👉</Link>
        </div>
      </div>
    );
  }
}

export default HilliersAdvisors;
