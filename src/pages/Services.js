import React, { Component } from 'react';
import Panel from '../components/Panel';
import ServicesList from '../components/ServicesList';
import CtaSection from '../components/CtaSection';

class Services extends Component {
  render() {
    return (
      <div className="page page--services">
        <Panel>
          <h2 className="f1 measure lh-title mt0">Specialist design services</h2>
          <p className="measure f4 lh-copy">I am available and looking for freelance projects for first quarter 2017. I specialise in website front&ndash;end design and development.</p>
          <p className="measure f5 lh-copy">I'm interested in both collaborating with agencies and teams on overflow project work and working one-on-one with business to create an effective, hollistic online presence and brand.</p>
          <p className="measure f5 lh-copy">I am passionate about all things Newcastle and would love the opportunity to work on something that Novocastrians care about.</p>
          <p className="measure f6 lh-copy gray i">(Psst! If you're not based in Newy that's okay too!)</p>
        </Panel>
        <Panel className="bg-white">
          <ServicesList/>
        </Panel>
        <Panel className="bg-blue white">
          <CtaSection
            heading="Interested in working with me?"
            button="Get in touch 😄"
            url="/contact"
          />
        </Panel>
      </div>
    );
  }
}

export default Services;
