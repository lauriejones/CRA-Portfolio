import React, { Component } from 'react';
import {Link} from 'react-router';

class RecentProjectList extends Component {
  render() {
    return (
      <div>
        <h3 className="f6 ttu tracked mt0 mb4 gray">Recent Projects</h3>
        <ul className="list mt0 mb3 pl0 f2 f1-ns b measure lh-solid">
          <li className=""><Link to="/work/hilliers-advisors" className="db pv3 hover-rainbow-text no-underline hide-child">Hillier's Advisors <span className="child">👉</span></Link></li>
          <li className="bt b--light-gray"><Link to="/work/skelton-consulting" className="db pv3 hover-rainbow-text no-underline hide-child">Skelton Consulting <span className="child">👉</span></Link></li>
          <li className="bt b--light-gray"><Link to="/work/hilliers-advisors" className="db pv3 hover-rainbow-text no-underline hide-child">Lake Macquarie Holiday Parks <span className="child">👉</span></Link></li>
          <li className="bt b--light-gray"><Link to="/work/hilliers-advisors" className="db pv3 hover-rainbow-text no-underline hide-child">ServaxNet <span className="child">👉</span></Link></li>
        </ul>
        <Link to="/work" className="gray no-underline underline-hover dib mt3">View more work</Link>
      </div>
    );
  }
}

export default RecentProjectList;
