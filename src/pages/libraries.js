import React from 'react';

import Page from '../components/Page';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import Topics from '../components/Topics';

import { LIBRARIES } from '../data';

const TopicsPage = () => (
  <Page>
    <Landing
      header={LIBRARIES.header}
      paragraph={LIBRARIES.paragraph}
      hasBack={true}
    />

    <Topics topics={LIBRARIES.list} />

    <Footer />
  </Page>
);

export default TopicsPage;
