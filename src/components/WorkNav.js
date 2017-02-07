import React, {Component} from 'react';
import {Link} from 'react-router';
import Container from './Container';

class WorkNav extends Component {
  render() {
    return (
      <div className="bt-ns b--black-10">
        <Container className="flex justify-between items-center">
          <div className="tl" style={{flexBasis: "33.33%"}}><Link to="/work" className="no-underline hover-blue dib pa3">👈 Previous <span className="dn di-ns">Project</span></Link></div>
          <div className="tc" style={{flexBasis: "33.33%"}}><Link to="/work" className="no-underline hover-blue dib pa3"><span className="dn di-ns">🖼️ </span>Back<span className="dn di-ns"> to Work</span></Link></div>
          <div className="tr" style={{flexBasis: "33.33%"}}><Link to="/work" className="no-underline hover-blue dib pa3">Next <span className="dn di-ns">Project </span>👉</Link></div>
        </Container>
      </div>
    );
  }
}

export default WorkNav;
