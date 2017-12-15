import React from 'react';

import Level from '../components/References/Level';
import LearnLink from '../components/References/LearnLink';

const references = [
  ({ values }) => <Level level={values.level} />,
  ({ values }) => <LearnLink learn={values.learn} linkType={values.linkType} />,
];

const LEARN_LIST = [
  {
    title: `Learn Machine Learning. But in JavaScript.`,
    description: `Learn about artificial intelligence and data science, two fields which are governed by machine learning, in JavaScript. Take it right to your browser with WebGL. BRIIM is a movement to enable JavaScript enthusiasts and web developers in machine learning.`,
    values: {
      level: 'Starting',
      learn: 'http://mathjs.org/',
    },
    references,
  },
  {
    title: `Powerful Machine Learning in JavaScript Libraries.`,
    description: `Don't reinvent the wheel. There are libraries in JavaScript for different machine learnign use cases out there.`,
    values: {
      level: 'Intermediate',
      learn: '/libraries',
      linkType: 'RELATIVE',
    },
    references,
  },
];

const LEARN = {
  header: 'Learn',
  paragraph: 'Handpicked material to get started as web developer or JavaScript enthusiast in machine learning.',
  list: LEARN_LIST,
};

export default LEARN;