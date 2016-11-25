import React, { Component } from 'react';

class ProjectList extends Component {
  render() {
    return (
      <div className="">
        <a href="#" className="no-underline underline-hover mr1">Twitter</a>
        &middot;
        <a href="#" className="no-underline underline-hover mh1">Facebook</a>
        &middot;
        <a href="#" className="no-underline underline-hover mh1">Linked In</a>
        &middot;
        <a href="#" className="no-underline underline-hover ml1">Dribbble</a>
        &middot;
        <a href="#" className="no-underline underline-hover ml1">GitHub</a>
      </div>
    );
  }
}

export default ProjectList;
