import React, { Component } from 'react';
import classNames from 'classnames';
import Container from './Container';

class ProjectList extends Component {
  render() {
    const {children, className, containerClass, ...otherProps} = this.props;
    const panelClasses = classNames('pv4 ph3 pa4-ns pa5-l', className);
    return (
      <div {...otherProps} className={panelClasses}>
        <Container className={containerClass}>{children}</Container>
      </div>
    );
  }
}

export default ProjectList;
