import React, { Component } from 'react';
import Panel from '../../../components/Panel';

import data from '../projects';
import ProjectTemplate from '../../../components/ProjectTemplate';

import Home from './img/lm-home@2x-copy.jpg';
import Park from './img/lmhp-park.jpg';
import iPad from './img/lmhp-ipad.jpg';
import Menu from './img/LakeMac_Menu_Flyout.jpg';
import Mobile from './img/LakeMac_Home_Mobile_Expanded.jpg';
import Content from './img/LakeMac_Content_Mobile.jpg';
import Contact from './img/LakeMac_Contact_Modal.jpg';
import Devices from './img/lm-devices.jpg';

class LakeMac extends Component {
  render() {
    return (
      <ProjectTemplate project={data.lakeMac} hero={Home} heroBgColor="#f5c012">

        <Panel>
          <figure className="tc">
              <img className="screenshot" src={Home} alt="Home Page Design" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Home Page Design</figcaption>
          </figure>
        </Panel>

        <Panel>
          <figure className="tc">
              <img className="screenshot" src={Park} alt="Tablet Home Page Design" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Tablet Home Page Design</figcaption>
          </figure>
        </Panel>

        <Panel>
          <figure className="tc">
              <img className="screenshot" src={iPad} alt="Mobile Home Page Design" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Mobile Home Page Design</figcaption>
          </figure>
        </Panel>

        <Panel className="bg-white" containerClass="flex-l justify-around-l">
          <figure className="pa2-l mb4 mb5-m mb0-l">
            <img className="screenshot" src={Menu} alt="Forum Design" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Support Forum Design</figcaption>
          </figure>
          <figure className="pa2-l">
              <img className="screenshot" src={Mobile} alt="Business Card Design" />
              <figcaption className="f6 ttu tracked tc mt3 silver">Business Card Design</figcaption>
          </figure>
          <figure className="pa2-l">
              <img className="screenshot" src={Content} alt="Business Card Design" />
              <figcaption className="f6 ttu tracked tc mt3 silver">Business Card Design</figcaption>
          </figure>
          <figure className="pa2-l">
              <img className="screenshot" src={Contact} alt="Business Card Design" />
              <figcaption className="f6 ttu tracked tc mt3 silver">Business Card Design</figcaption>
          </figure>
        </Panel>

        <Panel className="bg-white">
          <figure className="tc">
              <img className="screenshot" src={Devices} alt="Coastal Transport's Golden Rules" />
            <figcaption className="f6 ttu tracked tc mt3 silver">Coastal Transport's Golden Rules</figcaption>
          </figure>
        </Panel>

      </ProjectTemplate>
    );
  }
}

export default LakeMac;
