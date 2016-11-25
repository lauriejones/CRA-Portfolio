import React, { Component } from 'react';
import {Link} from 'react-router';
import Logo from './Logo'

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <div className="bg-near-black silver flex justify-between pa3 ph4-ns pv4-l ph5-l">
      <Link to="/home" className="dib silver rainbow-text">
        <Logo size="small"/>
      </Link>
        <div>&copy; {year} Laurie Jones. All rights reserved.</div>
      </div>
    );
  }
}

export default Footer;
