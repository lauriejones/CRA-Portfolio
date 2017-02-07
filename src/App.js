import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    const {children, location: {pathname}} = this.props;
    return (
      <div className="flex flex-column bg-near-white justify-between" style={{minHeight: '100vh'}}>
        <Header/>
        <div className="">
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={600}
            transitionEnterTimeout={400}
            transitionLeaveTimeout={200}
          >
            {React.cloneElement(children || <div>Page not found.</div>, {key: pathname})}
          </ReactCSSTransitionGroup>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
