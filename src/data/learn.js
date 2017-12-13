import React from 'react';

import Level from '../components/References/Level';
import LearnLink from '../components/References/LearnLink';

const LEARN_LIST = [
  {
    title: `Learn Machine Learning. But in JavaScript.`,
    description: `Learn about artificial intelligence and data science, two fields which are governed by machine learning, in JavaScript. Take it right to your browser with WebGL. BRIIM is a movement to enable JavaScript enthusiasts and web developers in machine learning.`,
    values: {
      level: 'Starting',
      learn: 'foo-bar.bri.im/',
    },
    references: [
      ({ values }) => <Level level={values.level} />,
      ({ values }) => <LearnLink learn={values.learn} />,
    ],
  },
  {
    title: `Learn Machine Learning. But in JavaScript.`,
    description: `Learn about artificial intelligence and data science, two fields which are governed by machine learning, in JavaScript. Take it right to your browser with WebGL. BRIIM is a movement to enable JavaScript enthusiasts and web developers in machine learning.`,
    values: {
      level: 'Intermediate',
      learn: 'foo-bar.bri.im/',
    },
    references: [
      ({ values }) => <Level level={values.level} />,
      ({ values }) => <LearnLink learn={values.learn} />,
    ],
  },
];

const LEARN = {
  header: 'Learn',
  paragraph: 'Handpicked material to get started as web developer or JavaScript enthusiast in machine learning.',
  list: LEARN_LIST,
};

export default LEARN;