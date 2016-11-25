import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={ className }>
        <nav className="nav">
          <Link to="/about" className="nav__item ml3 ml4-ns f5 f4-ns fw6 mid-gray no-underline dim">About</Link>
          <Link to="/work" className="nav__item ml3 ml4-ns f5 f4-ns fw6 mid-gray no-underline dim">Work</Link>
          <Link to="/services" className="nav__item ml3 ml4-ns f5 f4-ns fw6 mid-gray no-underline dim">Services</Link>
          <Link to="/contact" className="nav__item ml3 ml4-ns f5 f4-ns fw6 mid-gray no-underline dim">Contact</Link>
        </nav>
      </div>
    );
  }
}

export default Nav;
