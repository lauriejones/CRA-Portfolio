import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Logo from './Logo';

class Header extends Component {
  render() {
    return (
      <div className="site-header flex justify-between items-center pa3 pa4-m pa5-l">
        <Link to="/home" className="dib rainbow-text">
          <Logo/>
        </Link>
        <Nav/>
      </div>
    );
  }
}

export default Header;
