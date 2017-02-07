import React, { Component } from 'react';

class ProjectList extends Component {
  render() {
    const {className} = this.props;
    const socialLinksData = [
      {
        name: 'Twitter',
        url: 'https://twitter.com/laurie_jones'
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/lauriejonesme'
      },
      {
        name: 'Linked In',
        url: 'https://au.linkedin.com/in/lauriejonesme'
      },
      {
        name: 'Dribbble',
        url: 'https://dribbble.com/lauriejones'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/lauriejones'
      }
    ];
    const socialLinks = socialLinksData.map(site => {
      return <span key={site.name}>
        <span className="">&middot;</span>
        <a href={site.url} className="no-underline hover-light-gray dib ph2 pv3">
          {site.name}
        </a>
      </span>;
    })
    return (
      <div className={className}>
        {socialLinks}
      </div>
    );
  }
}

export default ProjectList;
