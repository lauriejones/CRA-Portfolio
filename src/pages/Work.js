import React, { Component } from 'react';
import ProjectList from '../components/ProjectList';
import Panel from '../components/Panel';
import CtaSection from '../components/CtaSection';

class Work extends Component {
  render() {
    return (
      <div className="page page--work">
        <Panel className="bg-rainbow white">
          <h1 className="f3 measure lh-title mv0">Selected Work</h1>
        </Panel>
        <Panel className="bg-white">
          <ProjectList/>
        </Panel>

        <Panel className="bg-blue white">
          <CtaSection
            heading="See what I can do for you."
            url="/services"
            button="Services"
          />
      </Panel>

      </div>
    );
  }
}

export default Work;
