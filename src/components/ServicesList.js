import React, { Component } from 'react';

function ListItem(props) {
  const {children} = props;
  return (
    <li className="db pv3 bt b--light-gray">{children}</li>
  );
}

class ServicesList extends Component {
  render() {
    return (
      <div>
        <h3 className="f6 ttu tracked mt0 mb4 gray">What I can do for you</h3>
        <ul className="list mt0 mb3 pl0 f2 f1-ns b measure lh-solid">
          <li className="db pv3">Website design</li>
          <ListItem service="i do stuff">UI design</ListItem>
          <ListItem>Front-end development</ListItem>
          <ListItem>React development</ListItem>
          <ListItem>Brand &amp; identity design</ListItem>
        </ul>
      </div>
    );
  }
}

export default ServicesList;
