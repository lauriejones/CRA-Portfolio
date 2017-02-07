import React, { Component } from 'react';
import classNames from 'classnames';

class Logo extends Component {
  render() {
    const { size, className } = this.props;
    const classes = classNames({
      className,
      'w1': size === 'small',
      'lj w2-l': size === 'medium'
    })
    return (
      <svg className={classes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 40">
        <path
          fill="currentColor"
          d='M26,40c-5,0,-10-5-10-10H0V0h36v30C36,36,32,40,26,40z'
        />
      </svg>
    );
  }
}

Logo.PropTypes = {
  size: React.PropTypes.string,
  className: React.PropTypes.string
}

Logo.defaultProps = {
  size: 'medium'
}

export default Logo;
