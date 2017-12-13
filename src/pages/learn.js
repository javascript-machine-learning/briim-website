import React from 'react';

import Page from '../components/Page';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import Topics from '../components/Topics';

import TOPICS from '../data/learn';

const TopicsPage = () => (
  <Page>
    <Landing
      header={TOPICS.header}
      paragraph={TOPICS.paragraph}
      hasBack={true}
    />

    <Topics topics={TOPICS.list} />

    <Footer />
  </Page>
);

export default TopicsPage;
