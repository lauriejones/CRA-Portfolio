import React, { Component } from 'react';
import {Link} from 'react-router';

class RecentProjectList extends Component {
  render() {
    return (
      <div className="bg-white ph3 pv4 pa4-m pa5-l">
        <h3 className="f6 ttu tracked mt0 mb4 gray">Recent Projects</h3>
        <ul className="list pl0">
          <li className="f2 f1-ns b measure lh-solid mb3"><a href="#" className="rainbow-text no-underline hide-child">Hillier's Advisors <span className="child">👉</span></a></li>
          <li className="f2 f1-ns b measure lh-solid mb3"><a href="#" className="rainbow-text no-underline hide-child">Skelton Consulting <span className="child">👉</span></a></li>
          <li className="f2 f1-ns b measure lh-solid mb3"><a href="#" className="rainbow-text no-underline hide-child">ServaxNet <span className="child">👉</span></a></li>
          <li className="f2 f1-ns b measure lh-solid mb3"><a href="#" className="rainbow-text no-underline hide-child">Lake Macquarie Holiday Parks <span className="child">👉</span></a></li>
          <li className="f2 f1-ns b measure lh-solid mb3"><a href="#" className="rainbow-text no-underline hide-child">Coastal Transport <span className="child">👉</span></a></li>
        </ul>
        <Link to="work" className="no-underline underline-hover dib mt3">View more work</Link>
      </div>
    );
  }
}

export default RecentProjectList;
