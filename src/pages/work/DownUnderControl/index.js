import React, { Component } from 'react';
import Panel from '../../../components/Panel';

import data from '../projects';
import ProjectTemplate from '../../../components/ProjectTemplate';

import DUCHero from './img/duc-2x.png';
import DUCHome from './img/macbook-duc.jpg';
import DUCCapabilities from './img/capabilities-page.jpg';
import DUCContact from './img/contact-page.jpg';

class DownUnderControls extends Component {
  render() {
    return (
      <ProjectTemplate project={data.downUnderControls} hero={DUCHero} heroBgColor="#f27c21">

        <Panel className="bg-white">
          <figure className="tc">
              <img className="screenshot" src={DUCHome} alt="Home page" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Home Page Design</figcaption>
          </figure>
        </Panel>

        <Panel>
          <figure className="tc">
              <img className="screenshot" src={DUCCapabilities} alt="Capabilities page" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Capabilities Page Design</figcaption>
          </figure>
        </Panel>

        <Panel>
          <figure className="tc">
              <img className="screenshot" src={DUCContact} alt="Contact page" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Contact Page Design</figcaption>
          </figure>
        </Panel>

      </ProjectTemplate>
    );
  }
}

export default DownUnderControls;
