import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Nav extends Component {
  render() {
    const { className } = this.props;
    const navItemClasses = classNames('dib pa2 ml3-ns ml4-l f6 f5-ns no-underline underline-hover', className);
    const activeNavItemClasses = classNames('rainbow-text');
    return (
      <div className={ className }>
        <nav className="nav">
          <Link to="/work" className={navItemClasses} activeClassName={activeNavItemClasses}>Work</Link>
          <Link to="/services" className={navItemClasses} activeClassName={activeNavItemClasses}>Services</Link>
          <Link to="/contact" className={navItemClasses} activeClassName={activeNavItemClasses}>Contact</Link>
        </nav>
      </div>
    );
  }
}

export default Nav;
