import React, { Component } from 'react';

class CtaSection extends Component {
  render() {
    const {heading, callout, url, button} = this.props;
    return (
      <div className="bg-blue white pa3 pa4-m pa5-l">
        <h3>{heading}</h3>
        <p>{callout}</p>
        <a href={url}>{button}</a>
      </div>
    );
  }
}

React.PropTypes = {
  heading: React.PropTypes.string.isRequired,
  callout: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  button: React.PropTypes.string.isRequired
}

React.defaultProps = {
  heading: 'Take a look at what I can do for you',
  callout: 'Take a look at what I can do for you',
  url: 'services',
  button: 'View my services'
}

export default CtaSection;
