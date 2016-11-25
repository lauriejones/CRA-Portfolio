import React, { Component } from 'react';
import {Link} from 'react-router';

class ProjectList extends Component {
  render() {
    return (
      <div className="bg-white pa3 pa4-m pa5-l">
        <ul className="list pl0">
          <li className="f1 b measure lh-solid mb3"><Link to="work/hilliers-advisors" className="rainbow-text no-underline hide-child">Hillier's Advisors <span className="child">👉</span></Link></li>
          <li className="f1 b measure lh-solid mb3"><a href="#" className="rainbow-text no-underline hide-child">Skelton Consulting <span className="child">👉</span></a></li>
          <li className="f1 b measure lh-solid mb3"><a href="#" className="rainbow-text no-underline hide-child">ServaxNet <span className="child">👉</span></a></li>
          <li className="f1 b measure lh-solid mb3"><a href="#" className="rainbow-text no-underline hide-child">Lake Macquarie Holiday Parks <span className="child">👉</span></a></li>
          <li className="f1 b measure lh-solid mb3"><a href="#" className="rainbow-text no-underline hide-child">Coastal Transport <span className="child">👉</span></a></li>
          <li className="f1 b measure lh-solid mb3"><a href="#" className="rainbow-text no-underline hide-child">Down Under Controls <span className="child">👉</span></a></li>
          <li className="f1 b measure lh-solid mb3"><a href="#" className="rainbow-text no-underline hide-child">Auto Advantage <span className="child">👉</span></a></li>
        </ul>
      </div>
    );
  }
}

export default ProjectList;
