import React from 'react';

import ArticleType from '../components/References/ArticleType';
import ArticleLink from '../components/References/ArticleLink';

const references = [
  ({ values }) => <ArticleType articleType={values.articleType} />,
  ({ values }) => <ArticleLink articleLink={values.articleLink} />,
];

const BLOG_LIST = [
  {
    title: `Learn Machine Learning. But in JavaScript.`,
    description: `Learn about artificial intelligence and data science, two fields which are governed by machine learning, in JavaScript. Take it right to your browser with WebGL. BRIIM is a movement to enable JavaScript enthusiasts and web developers in machine learning.`,
    values: {
      articleType: 'News',
      articleLink: 'foo-bar.bri.im/',
    },
    references,
  },
  {
    title: `Learn Machine Learning. But in JavaScript.`,
    description: `Learn about artificial intelligence and data science, two fields which are governed by machine learning, in JavaScript. Take it right to your browser with WebGL. BRIIM is a movement to enable JavaScript enthusiasts and web developers in machine learning.`,
    values: {
      articleType: 'Tutorial',
      articleLink: 'foo-bar.bri.im/',
    },
    references,
  },
];

const BLOG = {
  header: 'Blog',
  paragraph: 'Insightful articles about Machine Learning in JavaScript to get you motivated joining the movement.',
  list: BLOG_LIST,
};

export default BLOG;