import React, { Component } from 'react';
import RecentProjectList from '../components/RecentProjectList';

class Home extends Component {
  render() {
    return (
      <div className="page page--home">
        <div className="hero pa3 pa4-m pa5-l">
          <h2 className="f3 measure lh-copy">Web designer &mdash; Front&ndash;end developer</h2>
          <p className="measure f4 lh-copy">
            👋 Hi, I'm Laurie Jones and making things for the web is my passion. I am fortunate enough to be able to do what I love for a living. I am currently a front-end developer at <a className="" href="https://www.nib.com.au" target="_blank">nib Health Funds</a>.
          </p>
          <p className="measure f5 lh-copy">At my day job I get to work in an agile, cross&ndash;functional team of amazingly talented people. However, my role is limited to development and I do not get to design.</p>
          <p className="measure f5 lh-copy">I am based in Newcastle, NSW at a really exciting time for the city.</p>
        </div>
        <RecentProjectList/>
      </div>
    );
  }
}

export default Home;
