import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Nav from './Nav';
import Logo from './Logo';

class Header extends Component {
  render() {
    const {className} = this.props;
    const classes = classNames('pa3', className);
    return (
      <div className={classes}>
        <div className="mw9 center flex justify-between items-center">
          <Link to="/" className="dib hover-rainbow-text" style={{height: '1rem'}}>
            <Logo size="small" className="grow-large"/>
          </Link>
          <Nav/>
        </div>
      </div>
    );
  }
}

export default Header;
