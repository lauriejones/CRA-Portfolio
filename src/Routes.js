import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Work Pages
import HilliersAdvisors from './pages/work/HilliersAdvisors/HilliersAdvisors';
import SkeltonConsulting from './pages/work/SkeltonConsulting/SkeltonConsulting';
import LakeMac from './pages/work/LakeMac';
import CoastalTransport from './pages/work/CoastalTransport';
import DownUnderControl from './pages/work/DownUnderControl';
import AutoAdvantage from './pages/work/AutoAdvantage';
import ObjectConnections from './pages/work/ObjectConnections/ObjectConnections';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route component={App}>
          <Route path="about" component={About}/>
          <Route path="work" component={Work}/>
            <Route path="work/hilliers-advisors" component={HilliersAdvisors}/>
            <Route path="work/skelton-consulting" component={SkeltonConsulting}/>
            <route path="work/lake-macquarie-holiday-parks" component={LakeMac}/>
            <route path="work/coastal-transport" component={CoastalTransport}/>
            <route path="work/down-under-control" component={DownUnderControl}/>
            <route path="work/auto-advantage" component={AutoAdvantage}/>
            <route path="work/object-connections" component={ObjectConnections}/>
          <Route path="services" component={Services}/>
          <Route path="contact" component={Contact}/>
        </Route>
      </Router>
    );
  }
}

export default Routes;
