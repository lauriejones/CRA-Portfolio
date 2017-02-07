import React, { Component } from 'react';
import {Link} from 'react-router';
import Header from '../components/Header';
import Panel from '../components/Panel';
import Footer from '../components/Footer';
import RecentProjectList from '../components/RecentProjectList';

import {settings} from '../settings';

class Home extends Component {
  render() {
  const {availableForProjects} = settings;
    return (
      <div className="page page--home">
        <Header className="absolute w-100 center white fadeIn"/>
        <div className="hero stock flex items-center justify-center bg-blue bg-rainbow white ph3 pv5 ph4-ns pv6-ns ph5-l tc" style={{minHeight: '100vh'}}>
          <div>
            <h1 className="f3 normal lh-solid mt0 mb3 measure">Independant designer and front&ndash;end developer</h1>
            <p className="mv0 b ttu f6 tracked black-60">Newcastle, Australia</p>
          </div>
          <div className="absolute bottom-2 w-2 move-vertically">
            <svg viewBox="0 0 20 20" width="1rem">
              <path d="M0 0 L10 10 L20 0" fill="none" stroke="white"></path>
            </svg>
          </div>

        </div>

        <Panel className="bg-white">
          <p className="measure f3 lh-copy">
            👋 Hi there, I'm Laurie Jones and I love designing and building things for the web.
          </p>
          <p className="measure f4 lh-copy">Currently I work as a front-end developer in an agile, cross-functional team at nib Health Funds. I also have experience in the digital agency scene as both a designer and a developer and have been freelancing on the side for 10 years.</p>
          <p className="measure f5 lh-copy">I am passionate about about creating beautiful, straight-forward user experiences that serve a purpose and enrich people's lives.</p>
          <p className="dib br1 pv2 ph3 ba b--black-10 measure f5 lh-copy">I am currently <span className={availableForProjects ? 'rainbow-text' : 'light-silver'}>{availableForProjects ? 'available' : 'unavailable'}</span> for projects. {availableForProjects ? '😁' : '😔'}</p>
      </Panel>

        <Panel className="bg-near-white">
          <h2 className="f3 normal">I love design, the web and Newcastle</h2>
          <p className="measure f5 lh-copy">
            Outside of my day job I am looking to collaborate with local Newcastle businesses to contribute towards something great.
          </p>
          <p className="measure f5 lh-copy">
            I am from Newcastle. I love this city and the amount of growth in the last few years has been incredibly exciting to see.</p>
          <p className="measure f5 lh-copy">
            I believe passion is fundamental to producing anything exceptional. If you have a project that you are truly passionate about I would genuinely love to hear about it. Enthusiasm is contagious; so let me be excited about it too.
          </p>
          <p className="measure f5 lh-copy">
            Take a look at my work and the services that I offer and if you think I might be a good fit for your project please get in touch.
          </p>
          <Link to="/work" className="f6 fw6 dib bg-rainbow white ph3 pv2 br2 grow no-underline mr2">See my work</Link>
          <Link to="/services" className="f6 fw6 dib ba b--black-10 gray ph3 pv2 br2 grow no-underline">See my specialty services</Link>
        </Panel>

        <Panel className="bg-white">
          <RecentProjectList/>
        </Panel>

        <Footer/>
      </div>
    );
  }
}

export default Home;
