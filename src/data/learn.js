import React from 'react';

import { Anchor } from '../components/Link';

const TYPES = {
  text: 'TEXT',
  handsOn: 'HANDS-ON',
  audio: 'AUDIO',
};

export const LEARN_LIST = [
  {
    title: `A Web Developer's Guide to Machine Learning in JavaScript`,
    description: `Learn about artificial intelligence and data science, two fields which are governed by machine learning, in JavaScript. Take it right to your browser with WebGL. The article gives you the right motivational boost and foundational knowledge to dive into the topic.`,
    values: {
      level: 'Motivation',
      type: TYPES.text,
      language: 'Human',
      learn: 'https://www.robinwieruch.de/machine-learning-javascript-web-developers/',
    },
  },
  {
    title: `Machine Learning 101 Presentation`,
    description: `A slide deck to give you an introduction to the field of machine learning. It touches all different parts to give you an good grasp of the subject.`,
    values: {
      level: 'Motivation',
      type: TYPES.text,
      language: 'Human',
      learn: 'https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/edit#slide=id.g183f28bdc3_0_90',
    },
  },
  {
    title: `Machine Learning Guide Podcast`,
    description: `A podcast series that aims to teach you the high level fundamentals of machine learning. It teaches the basic intuition, algorithms, and math. Where other learning resources will provide you the machine learning trees, the podcast provides the forest.`,
    values: {
      level: 'Motivation / Starting',
      type: TYPES.audio,
      language: 'Human',
      learn: 'http://ocdevel.com/podcasts/machine-learning',
    },
  },
  {
    title: `Machine Learning by Andrew Ng Course`,
    description: `The course provides a broad introduction to machine learning, datamining, and statistical pattern recognition. Topics include supervised learning (parametric/non-parametric algorithms, support vector machines, kernels, neural networks), unsupervised learning (clustering, dimensionality reduction, recommender systems, deep learning) and most important best practices in machine learning.`,
    values: {
      level: 'Starting',
      type: TYPES.handsOn,
      language: 'Octave / Matlab',
      learn: 'https://click.linksynergy.com/link?id=yL1MQRWYyXQ&offerid=467035.1560515719&type=2&murl=https%3A%2F%2Fwww.coursera.org%2Flearn%2Fmachine-learning',
    },
  },
  {
    title: `Calculus, Linear Algebra & Statistics`,
    description: <span>Machine learning builds up on lots of foundational mathematical knowledge. Do you need a refresher on math? Explore the courses on Khan Academy to learn about <Anchor href="https://www.khanacademy.org/math/calculus-home">calculus</Anchor>, <Anchor href="https://www.khanacademy.org/math/linear-algebra">linear algebra</Anchor>, and <Anchor href="https://www.khanacademy.org/math/statistics-probability">statistics</Anchor>.</span>,
    values: {
      level: 'Starting',
      type: TYPES.handsOn,
      language: 'Math',
      learn: 'https://www.khanacademy.org/math/',
    },
  },
  {
    title: `Shallow Algorithms and NNs in JavaScript`,
    description: `The BRIIM GitHub organization demonstrates several shallow algorithms implementations and neural networks. Along the way you often find a tutorial to learn about the implementation details.`,
    values: {
      level: 'Starting',
      type: TYPES.handsOn,
      language: 'JavaScript',
      learn: 'https://github.com/javascript-machine-learning',
    },
  },
  {
    title: `Machine Learning in JavaScript Libraries`,
    description: `You shouldn't reinvent the wheel. There are a bunch of libraries in JavaScript out there for different machine learning use cases. The list gives you a handpicked selection of those libraries.`,
    values: {
      level: 'Advanced',
      type: TYPES.handsOn,
      learn: '/libraries',
      language: 'JavaScript',
      linkType: 'RELATIVE',
    },
  },
  {
    title: `Deep Learning Specialization`,
    description: `A perfect successor for the machine learning by Andrew Ng course. In five courses, you will learn the foundations of Deep Learning, understand how to build neural networks, and learn how to lead successful machine learning projects. You will practice all these ideas in Python and in TensorFlow, which we will teach.`,
    values: {
      level: 'Advanced',
      type: TYPES.handsOn,
      language: 'Python',
      learn: 'https://click.linksynergy.com/link?id=yL1MQRWYyXQ&offerid=467035.11421701896&type=2&murl=https%3A%2F%2Fwww.coursera.org%2Fspecializations%2Fdeep-learning',
    },
  },
  {
    title: `Machine Learning Engineer Nanodegree`,
    description: `This program will teach you how to become a machine learning engineer, and apply predictive models to massive data sets in fields like finance, healthcare, education, and more.`,
    values: {
      level: 'Advanced',
      type: TYPES.handsOn,
      language: 'Python',
      learn: 'https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009',
    },
  },
  {
    title: `fast.ai`,
    description: `The course designed to take anyone with at least one year's coding experience to the point they can apply deep learning best practices to create state of the art models in computer vision, natural language, and recommendation systems.`,
    values: {
      level: 'Advanced',
      type: TYPES.handsOn,
      language: 'Python',
      learn: 'http://course.fast.ai/',
    },
  },
  {
    title: `Additional Machine Learning Books`,
    description: `A broad list of machine learning books curated by the community. These will give you all you need to go into every additional corner of machine learning.`,
    values: {
      level: 'Advanced',
      type: TYPES.text,
      language: 'Human',
      learn: 'https://github.com/josephmisiti/awesome-machine-learning/blob/master/books.md',
    },
  },
];

export const LEARN_MAIN = {
  header: 'Learn',
  paragraph: 'Handpicked roadmap of material to get you started as web developer or JavaScript enthusiast in machine learning.',
};
