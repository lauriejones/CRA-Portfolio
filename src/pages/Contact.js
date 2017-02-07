import React, { Component } from 'react';
import {settings} from '../settings';
import Panel from '../components/Panel';

class Contact extends Component {
  render() {
    const {availableForProjects} = settings;
    return (
      <div className="page page--contact">
        <Panel>
          <h1 className="f1 measure lh-title mt0">Get in touch</h1>
          {availableForProjects
            ? <p className="measure f5 lh-copy">I am currently available for work enquiries. Say hello and get things started.</p>
          : <p className="measure f5 lh-copy">I am currently unavailable for work enquiries, but if you have something really exciting feel free to still shoot me a message.</p>
          }
          <p className="measure f5 lh-copy mb0">✉️ Send me an email: <a className="hover-rainbow-text" href="mailto:hello@lauriejones.me">hello@lauriejones.me</a></p>
          <p className="measure f5 lh-copy mt0">💬 Message me on twitter: <a className="hover-rainbow-text" href="https://twitter.com/laurie_jones">@laurie_jones</a></p>
          <p className="measure f5 lh-copy">Thanks!</p>

        </Panel>
      </div>
    );
  }
}

export default Contact;
