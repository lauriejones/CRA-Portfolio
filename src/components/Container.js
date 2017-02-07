import React, {Component} from 'react';
import classNames from 'classnames';

class Container extends Component {
  render() {
    const {children, className} = this.props;
    const containerClasses = classNames(className, 'mw9 center');
    return <div className={containerClasses}>{children}</div>
  }
}

export default Container;
