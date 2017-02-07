import React, { Component } from 'react';
import {Link} from 'react-router';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

class Footer extends Component {
  render() {
    return (
      <div className="bg-near-black silver f6 flex justify-between items-center">
        <div className="mw9 center flex  justify-between items-center w-100">
          <Link to="/" className="dib hover-light-gray pa3" style={{height: '1rem'}}>
            <Logo size="small" className=""/>
          </Link>
          <SocialLinks className="dn dib-l"/>
          <div className="ml3 tr" style={{flexGrow: '1'}}>
            <a className="no-underline hover-light-gray dib pa3" href="mailto:hello@lauriejones.me">✉️ hello@lauriejones.me</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
