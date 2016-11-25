import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Services from './pages/Services';
import Contact from './pages/Contact';

import HilliersAdvisors from './pages/work/HilliersAdvisors';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="home" component={Home}/>
          <Route path="about" component={About}/>
          <Route path="work" component={Work}/>
            <Route path="work/hilliers-advisors" component={HilliersAdvisors}/>
          <Route path="services" component={Services}/>
          <Route path="contact" component={Contact}/>
        </Route>
      </Router>
    );
  }
}

export default Routes;
