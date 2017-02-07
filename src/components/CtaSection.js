import React, { Component } from 'react';
import {Link} from 'react-router';

class CtaSection extends Component {
  render() {
    const {heading, callout, url, button} = this.props;
    return (
      <div>
        <h3 className="dib mr2 f3 lh-title">{heading}</h3>
        {callout
          && (<p>{callout}</p>)
        }
        <Link to={url} className="f6 fw6 dib bg-white dark-gray ph3 pv2 br2 grow no-underline mr2">{button}</Link>
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
