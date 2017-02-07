import React, { Component } from 'react';
import Panel from '../../../components/Panel';

import data from '../projects';
import ProjectTemplate from '../../../components/ProjectTemplate';

// import OCLogo from './img/object-connections-logo.png';
import OCHero from './img/oca-hero.png';

import OCHome from './img/oca-home.jpg';
import OCPartners from './img/oca-partners.png';
import OCBusinessCard from './img/oca-business-card.jpg';
import OCDesigner from './img/oca-designer-icon.jpg';
import OCForum from './img/oca-forum2.jpg';
import OCSdk from './img/oca-sdk-icon.jpg';
import OCviewer from './img/oca-viewer-icon.jpg';
import OCSdkPage from './img/oca-sdk-page.png';

class ObjectConnections extends Component {
  render() {
    return (
      <ProjectTemplate project={data.objectConnections} hero={OCHero} heroBgColor="#dbe6ea">

        <Panel>
          <figure className="tc">
              <img className="screenshot" src={OCHome} alt="Homepage Design" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Home Page Design</figcaption>
          </figure>
        </Panel>

        <Panel>
          <figure className="tc">
              <img className="screenshot" src={OCSdkPage} alt="Designer Product Page Design" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Designer Product Page Design</figcaption>
          </figure>
        </Panel>

        <Panel>
          <figure className="tc">
              <img className="screenshot" src={OCPartners} alt="Partners Page Design" />
              <figcaption className="f6 ttu tracked tc mt3 silver">Partners Page Design</figcaption>
            </figure>
        </Panel>

        <Panel containerClass="flex-l justify-around-l">
          <figure className="pa2-l mb4 mb5-m mb0-l">
            <img className="screenshot" src={OCForum} alt="Forum Design" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Support Forum Design</figcaption>
          </figure>
          <figure className="pa2-l">
              <img className="screenshot" src={OCBusinessCard} alt="Business Card Design" />
              <figcaption className="f6 ttu tracked tc mt3 silver">Business Card Design</figcaption>
          </figure>
        </Panel>

        <Panel containerClass="flex justify-around">
          <div>
            <figure className="pa2">
              <img className="screenshot" src={OCDesigner} alt="Designer Icon" />
              <figcaption className="f6 ttu tracked tc mt3 silver">Designer Icon</figcaption>
            </figure>
          </div>
          <div>
            <figure className="pa2">
                <img className="screenshot" src={OCSdk} alt="SDK Icon" />
                <figcaption className="f6 ttu tracked tc mt3 silver">SDK Icon</figcaption>
              </figure>
          </div>
          <div>
            <figure className="pa2">
                <img className="screenshot" src={OCviewer} alt="Viewer Icon" />
                <figcaption className="f6 ttu tracked tc mt3 silver">Viewer Icon</figcaption>
              </figure>
          </div>
        </Panel>

      </ProjectTemplate>
    );
  }
}

export default ObjectConnections;
