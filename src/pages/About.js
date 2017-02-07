import React, { Component } from 'react';
import SocialLinks from '../components/SocialLinks';
import CtaSection from '../components/CtaSection';

class About extends Component {
  render() {
    return (
      <div className="page page--about">
        <div className="hero pa3 pa4-m pa5-l">
          <p className="measure f3 lh-copy">I'm Laurie Jones and making things for the web is my passion. I am fortunate enough to be able to do what I love for a living, working with super talented people as a front-end developer at <a href="https://www.nib.com.au" target="_blank">nib Health Funds</a>.</p>
          <p className="measure f5 lh-copy">At my day job I work in an agile, cross&ndash;functional team of amazingly talented people. However, my role is limited to development and I do not get to design.</p>
          <SocialLinks/>
        </div>

        <div className="hero bg-white pa3 pa4-m pa5-l">
          <h2 className="v2-title--1 measure lh-copy">kjhgkjgfkg</h2>
          <p className="measure lh-copy">At my day job I get to work in an agile, cross&ndash;functional team of amazingly talented people. However, my role is limited to development and I do not get to design.</p>
          <SocialLinks/>
        </div>

        <div className="pa3 pa4-m pa5-l">
          <h2 className="v2-title--2 measure lh-copy">About this site</h2>
          <p className="measure lh-copy">This site is built using a number of open source projects that I would like to thank:</p>
          <ul className="list pl0">
            <li>React</li>
            <li>Creat React App</li>
            <li>Tachyons</li>
            <li>classNames</li>
          </ul>
          <p className="measure f5 lh-copy"></p>
        </div>
        <CtaSection
          heading="Take a look at some of my recent projects"
          button="View my work"
          url="work"
        />
      </div>
    );
  }
}

export default About;
