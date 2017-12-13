import React from 'react';

import Footer from '../components/Footer';
import Page from '../components/Page';
import Landing from '../components/Landing';
import Topics from '../components/Topics';

import PROJECTS from '../data/projects';

const ProjectsPage = () => (
  <Page>
    <Landing
      header={PROJECTS.header}
      paragraph={PROJECTS.paragraph}
      hasBack={true}
    />

    <Topics topics={PROJECTS.list} />

    <Footer />
  </Page>
);

export default ProjectsPage;
