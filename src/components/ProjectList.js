import React, { Component } from 'react';
import {Link} from 'react-router';

class ProjectList extends Component {
  render() {
    return (
      <div>
        <ul className="list pl0">
          <li className="f1 b measure lh-solid">
            <Link to="work/hilliers-advisors" className="project-link db pv3 hover-rainbow-text visited-moon-gray no-underline hide-child">Hillier's Advisors <span className="child">👉</span></Link>
          </li>
          <li className="f1 b measure lh-solid bt b--light-gray">
            <Link to="work/skelton-consulting" className="project-link db pv3 hover-rainbow-text visited-moon-gray no-underline hide-child">Skelton Consulting <span className="child">👉</span></Link>
          </li>
          
          <li className="f1 b measure lh-solid bt b--light-gray"><a href="#" className="project-link db pv3 hover-rainbow-text visited-moon-gray no-underline hide-child">ServaxNet <span className="child">👉</span></a></li>

          <li className="f1 b measure lh-solid bt b--light-gray">
            <Link to="work/lake-macquarie-holiday-parks" className="project-link db pv3 hover-rainbow-text visited-moon-gray no-underline hide-child">Lake Macquarie Holiday Parks <span className="child">👉</span></Link>
          </li>
          <li className="f1 b measure lh-solid bt b--light-gray">
            <Link to="work/coastal-transport" className="project-link db pv3 hover-rainbow-text visited-moon-gray no-underline hide-child">Coastal Transport <span className="child">👉</span></Link>
          </li>
          <li className="f1 b measure lh-solid bt b--light-gray">
            <Link to="work/down-under-control" className="project-link db pv3 hover-rainbow-text visited-moon-gray no-underline hide-child">Down Under Control <span className="child">👉</span></Link>
          </li>
          <li className="f1 b measure lh-solid bt b--light-gray">
            <Link to="work/auto-advantage" className="project-link db pv3 hover-rainbow-text visited-moon-gray no-underline hide-child">Auto Advantage <span className="child">👉</span></Link>
          </li>
          <li className="f1 b measure lh-solid bt b--light-gray">
            <Link to="work/object-connections" className="project-link db pv3 hover-rainbow-text visited-moon-gray no-underline hide-child">Object Connections <span className="child">👉</span></Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProjectList;
