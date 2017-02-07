import React, { Component } from 'react';
import Panel from '../../../components/Panel';

import data from '../projects';
import ProjectTemplate from '../../../components/ProjectTemplate';

import AALogo from './img/AA-logo.jpg';
import AAHome from './img/AA-Home.png';
import AAFAQ from './img/AA-FAQ.png';
import AAHowItWorks from './img/AA-How-it-Works.png';
import AAPreview from './img/AA-Preview.png';

class AutoAdvantage extends Component {
  render() {
    return (
      <ProjectTemplate project={data.autoAdvantage} hero={AALogo} heroBgColor="#D9E5ED">

        <Panel containerClass="flex-l justify-around-l">
          <figure className="pa2-l mb4 mb5-m mb0-l">
            <img className="screenshot" src={AAHome} alt="Home page" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Home Page Design</figcaption>
          </figure>
          <figure className="pa2-l">
              <img className="screenshot" src={AAHowItWorks} alt="How it works page" />
              <figcaption className="f6 ttu tracked tc mt3 silver">How It Works Page Design</figcaption>
          </figure>
        </Panel>

        <Panel>
          <figure className="tc">
              <img className="screenshot" src={AAFAQ} alt="FAQ Page Design" />
            <figcaption className="f6 ttu tracked tc mt3 silver">FAQ Page Design</figcaption>
          </figure>
        </Panel>

        <Panel>
          <figure className="tc">
              <img className="screenshot" src={AAPreview} alt="Auto Advantage Mobile Site with Modal Displays" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Auto Advantage Mobile Site with Modal Displays</figcaption>
          </figure>
        </Panel>

      </ProjectTemplate>
    );
  }
}

export default AutoAdvantage;
