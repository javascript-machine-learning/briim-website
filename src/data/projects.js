import React from 'react';

import Popularity from '../components/References/Popularity';
import DemoLink from '../components/References/DemoLink';
import SourceCodeLink from '../components/References/SourceCodeLink';

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
      ({ values }) => <SourceCodeLink source={values.source} />,
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
      ({ values }) => <SourceCodeLink source={values.source} />,
    ],
  },
];

const PROJECTS = {
  header: 'Projects',
  paragraph: 'Exciting projects in Machine Learning with JavaScript to get you motivated to join the movement.',
  list: PROJECTS_LIST,
}

export default PROJECTS;