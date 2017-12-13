import React from 'react';

import Footer from '../components/Footer';
import Page from '../components/Page';
import Landing from '../components/Landing';
import Section from '../components/Section';
import Aside, { BorderedAside } from '../components/Aside';
import Button from '../components/Button';
import ButtonButLink from '../components/ButtonButLink';
import Link from '../components/Link';

const ProjectsPage = () => (
  <Page>
    <Landing
      header={'Projects'}
      paragraph={'Exciting projects in Machine Learning with JavaScript to get you motivated to join the movement.'}
      hasBack={true}
    />

    <div>
      <Section>
        <BorderedAside direction={'right'}>
          <h3>
            Learn Machine Learning. But in JavaScript.
          </h3>
          <p>
            Learn about artificial intelligence and data science, two fields which are governed by machine learning, in JavaScript. Take it right to your browser with WebGL. BRIIM is a movement to enable JavaScript enthusiasts and web developers in machine learning.
          </p>
        </BorderedAside>

        <Aside>
          <ul>
            <li>Popularity: {89}</li>
            <li><Link to="https://www.getrevue.co/profile/briim">Source</Link></li>
            <li><Link to="#slack">Demo</Link></li>
          </ul>
        </Aside>
      </Section>

    </div>

    <Footer />
  </Page>
);

export default ProjectsPage;
