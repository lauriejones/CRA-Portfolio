import React, { Component } from 'react';
import Panel from './Panel';
import WorkNav from './WorkNav';
import CtaSection from './CtaSection';

class ProjectTemplate extends Component {
  render() {
    const {children, project, hero, heroBgColor} = this.props;
    return (
      <div className="page page--project">

        <div className="flex flex-wrap flex-no-wrap-ns items-center justify-around overflow-hidden pt5-ns" style={{backgroundColor: `${heroBgColor}`}}>
          <div className="pa4 pa5-ns pt0-ns tc tl-l">
            <h1 className="f2 mt0 mb3">{project.title}</h1>
            {project.link
              ? <a href={project.link} className="no-underline-hover" target="_blank">View Online</a>
              : null
            }
          </div>
          <div className="self-end pr3 pr5-l pl0-ns dn db-l">
            <img src={hero} className="w-100 br2 relative" alt={project.title} style={{bottom: '-6px'}} />
          </div>

        </div>

        <Panel>
          <p className="f3 mt0 measure lh-copy">{project.introduction}</p>

          <div className="flex-l items-start justify-start">
            <div>
              {project.description.map(p => {
                return <p className="f5 measure lh-copy" key={p}>{p}</p>
              })}

              {project.disclaimer
                ? <p className="f6 i gray">{project.disclaimer}</p>
                : null
              }
            </div>

            <div className="pl5">
              <div className="pv4 ph3 pa4-ns bg-light-gray">
                <h4 className="mt0">Services included:</h4>
                <ul className="lh-copy">
                  {project.services.map(service => {
                    return <li key={service}>{service}</li>
                  })}
                </ul>
              </div>
            </div>

          </div>

        </Panel>

        {children}

        {project.testimonial
          ? (
            <Panel className="bg-white">
              <div className="measure center">
                <div className="serif f3 lh-title mb3">&ldquo;{project.testimonial.quote}&rdquo;</div>
                <div className="gray">&mdash; {project.testimonial.cite}</div>
              </div>
            </Panel>)
          : null
        }

        <div className="pa4-ns pa5-l tc bt b--black-10">
          <Panel className="bg-rainbow white dib">
            <CtaSection
              heading="Have a project you think I can help you with?"
              url="/contact"
              button="Get in touch"
            />
          </Panel>
        </div>

        <WorkNav/>

      </div>
    );
  }
}

export default ProjectTemplate;
