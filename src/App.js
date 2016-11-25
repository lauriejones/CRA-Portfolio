import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="flex flex-column bg-near-white justify-between"  style={{minHeight: '100vh'}}>
        <Header/>
        <div className="">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
