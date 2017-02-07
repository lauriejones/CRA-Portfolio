import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import WorkNav from '../../../components/WorkNav';
import CtaSection from '../../../components/CtaSection';

import data from '../projects';

import OCLogo from './img/object-connections-logo.png';
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
      <div className="page page--project">

        <div className="flex flex-wrap flex-no-wrap-l items-center justify-between" style={{backgroundColor: "#dbe6ea", minHeight: "66vh"}}>
          <div className="pa4 pa5-ns">
            <h1 className="f2">Object <br/>Connections</h1>
            <a href="http://objectconnections.com" className="button  resume" target="_blank">View Online</a>
          </div>
          <div className="self-end ph3">
            <img src={OCHero} className="w-100 br2" alt="Object Connections" />
          </div>

        </div>

        <Panel>
          <p className="f3 mt0 measure lh-copy">I worked closely with Object Connections on a wide range of materials in 2011. I joined the team for 3 months primarily to redesign their website and other designed materials to ensure a consistent visual language.</p>

          <div className="flex-l items-start justify-start justify-between-l">
            <div>
              <p className="f5 measure lh-copy">Object Connections were working hard on the latest release of their business rules software, Common Knowledge. I was brought in to design and develop a professional website for the company ahead of the software launch.</p>
              <p className="f5 measure lh-copy">During my time there I worked on a vast array of projects. My role was primarily design-orientated, focusing on creating a consistent brand for Object Connections across all mediums; designing the website and support forum, software icons, product packaging, launch screens and other branded materials.</p>
              <p className="f5 measure lh-copy">This project also had a significant development component in building the website, skinning the SMF forum and development of a secure member area and 30-day serial key generator. The team at Object Connections were able to help with the more technical aspects and the whole experience proved to be extremely fulfilling.</p>
            </div>

            <div className="pv4 ph3 pa4-ns bg-light-gray">
              <h4 className="mt0">Services included:</h4>
              <ul className="lh-copy">
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Branding Materials</li>
                <li>Product Icons Design</li>
                <li>App icons</li>
              </ul>
            </div>

          </div>

        </Panel>

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

        <div className="pa4-ns pa5-l tc bt b--black-10">
          <Panel className="bg-rainbow white dib">
            <CtaSection
              heading="Have a project you think I can help you with?"
              url="/contact"
              button="Get in touch"
            />
          </Panel>
        </div>

        <WorkNav/>

      </div>
    );
  }
}

export default ObjectConnections;
