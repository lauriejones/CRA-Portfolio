import React, { Component } from 'react';
import ProjectList from '../components/ProjectList';
import CtaSection from '../components/CtaSection';

class Work extends Component {
  render() {
    return (
      <div className="page page--work">
        <div className="hero pa3 pa4-m pa5-l">
          <h2 className="f3 measure lh-copy">Selected Work</h2>
        </div>
        <ProjectList/>
        <CtaSection/>
      </div>
    );
  }
}

export default Work;
