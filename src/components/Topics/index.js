import React, { createElement } from 'react';
import styled from 'styled-components';

import Section from '../Section';
import Aside, { BorderedAside } from '../Aside';
import { Anchor } from '../Link';

const EditOnGithub = styled.p`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`

const Topics = ({ topics }) =>
  <div>
    <div>
      {topics.map((project, i) =>
        <Topic key={i} project={project} />
      )}
    </div>
    <EditOnGithub><Anchor href="https://github.com/javascript-machine-learning/briim-website-content">Edit this page on GitHub</Anchor></EditOnGithub>
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
