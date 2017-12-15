import React from 'react';

import Page from '../components/Page';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import Topics from '../components/Topics';

import { BLOG } from '../data';

const TopicsPage = () => (
  <Page>
    <Landing
      header={BLOG.header}
      paragraph={BLOG.paragraph}
      hasBack={true}
    />

    <Topics topics={BLOG.list} isEditable={true} />

    <Footer />
  </Page>
);

export default TopicsPage;
