import React, { createElement } from 'react';

import Section from '../Section';
import Aside, { BorderedAside } from '../Aside';

const Topics = ({ topics }) =>
  <div>
    {topics.map((project, i) =>
      <Topic key={i} project={project} />
    )}
  </div>

const Topic = ({ project }) =>
  <Section>
    <BorderedAside direction={'right'}>
      <h3>
        {project.title}
      </h3>
      <p>
        {project.description}
      </p>
    </BorderedAside>

    <Aside>
      <ul>
        {(project.references || []).map((reference, i) =>
          <li key={i}>{createElement(reference, { values: project.values })}</li>
        )}
      </ul>
    </Aside>
  </Section>

export default Topics;
