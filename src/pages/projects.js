import React from 'react';

import Page from '../components/Page';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import Topics from '../components/Topics';

import { PROJECTS } from '../data';

const TopicsPage = () => (
  <Page>
    <Landing
      header={PROJECTS.header}
      paragraph={PROJECTS.paragraph}
      hasBack={true}
    />

    <Topics topics={PROJECTS.list} isEditable={true} />

    <Footer />
  </Page>
);

export default TopicsPage;
