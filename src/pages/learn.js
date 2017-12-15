import React from 'react';

import Page from '../components/Page';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import Topics from '../components/Topics';

import { LEARN } from '../data';

const TopicsPage = () => (
  <Page>
    <Landing
      header={LEARN.header}
      paragraph={LEARN.paragraph}
      hasBack={true}
    />

    <Topics topics={LEARN.list} isEditable={false} />

    <Footer />
  </Page>
);

export default TopicsPage;
