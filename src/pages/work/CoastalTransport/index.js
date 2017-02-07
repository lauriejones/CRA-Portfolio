import React, { Component } from 'react';
import Panel from '../../../components/Panel';

import data from '../projects';
import ProjectTemplate from '../../../components/ProjectTemplate';

import CTLogo from './img/Coastal-Transport-Logo.jpg';
import CTHome from './img/Coastal-Transport-Services.png';
import CTTablet from './img/Coastal-Transport-Services_Tablet.png';
import CTMobile from './img/Coastal-Transport-Mobile.jpg';
import CTGoldenRules from './img/golden-rules.png';

class CoastalTransport extends Component {
  render() {
    return (
      <ProjectTemplate project={data.coastalTransport} hero={CTLogo} heroBgColor="#0e2c86">

        <Panel className="bg-white">
          <figure className="tc">
              <img className="screenshot" src={CTHome} alt="Home Page Design" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Home Page Design</figcaption>
          </figure>
        </Panel>

        <Panel className="bg-white">
          <figure className="tc">
              <img className="screenshot" src={CTTablet} alt="Tablet Home Page Design" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Tablet Home Page Design</figcaption>
          </figure>
        </Panel>

        <Panel className="bg-white">
          <figure className="tc">
              <img className="screenshot" src={CTMobile} alt="Mobile Home Page Design" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Mobile Home Page Design</figcaption>
          </figure>
        </Panel>

        <Panel className="bg-white">
          <figure className="tc">
              <img className="screenshot" src={CTGoldenRules} alt="Coastal Transport's Golden Rules" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Coastal Transport's Golden Rules</figcaption>
          </figure>
        </Panel>

      </ProjectTemplate>
    );
  }
}

export default CoastalTransport;
