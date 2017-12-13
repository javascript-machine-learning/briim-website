import React from 'react';

import Popularity from '../components/References/Popularity';
import DemoLink from '../components/References/DemoLink';
import SourceLink from '../components/References/SourceLink';

const PROJECTS_LIST = [
  {
    title: `Learn Machine Learning. But in JavaScript.`,
    description: `Learn about artificial intelligence and data science, two fields which are governed by machine learning, in JavaScript. Take it right to your browser with WebGL. BRIIM is a movement to enable JavaScript enthusiasts and web developers in machine learning.`,
    values: {
      popularity: 99,
      demo: 'foo-bar.bri.im/',
      source: 'git.de',
    },
    references: [
      ({ values }) => <Popularity popularity={values.popularity} />,
      ({ values }) => <DemoLink demo={values.demo} />,
      ({ values }) => <SourceLink source={values.source} />,
    ],
  },
  {
    title: `Learn Machine Learning. But in JavaScript.`,
    description: `Learn about artificial intelligence and data science, two fields which are governed by machine learning, in JavaScript. Take it right to your browser with WebGL. BRIIM is a movement to enable JavaScript enthusiasts and web developers in machine learning.`,
    values: {
      popularity: 77,
      demo: 'foo-bar.bri.im/',
      source: 'git.de',
    },
    references: [
      ({ values }) => <Popularity popularity={values.popularity} />,
      ({ values }) => <DemoLink demo={values.demo} />,
      ({ values }) => <SourceLink source={values.source} />,
    ],
  },
];

const PROJECTS = {
  header: 'Projects',
  paragraph: 'Insightful projects taken from Machine Learning in JavaScript to get you motivated joining the movement.',
  list: PROJECTS_LIST,
};

export default PROJECTS;