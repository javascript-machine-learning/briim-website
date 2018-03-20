import React from 'react';
import format from 'date-fns/format';

const ARTICLE_TYPES = {
  tutorial: 'Tutorial',
  new: 'News',
  project: 'Project',
  discussion: 'Discussion',
};

// Recent Last, Oldest First
export const BLOG_LIST = [
  {
    title: `Machine Learning Algorithms in JavaScript`,
    description: `This tutorial series teaches you several shallow machine learning algorithms (Naive Bayes classifier, k-means clustering, k-nearest-neighbor) and how to implement them.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'http://burakkanber.com/blog/machine-learning-in-other-languages-introduction/',
      releaseDate: format(new Date(2012, 9, 3), 'MM/DD/YYYY'),
    },
  },
  {
    title: `Simple Hand Gesture Recognition using OpenCV and JavaScript`,
    description: `This tutorial teaches you how to recognize simple hand gestures in frames of a video stream or in still images using my npm package opencv4nodejs.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://medium.com/@muehler.v/simple-hand-gesture-recognition-using-opencv-and-javascript-eb3d6ced28a0',
      releaseDate: format(new Date(2017, 9, 5), 'MM/DD/YYYY'),
    },
  },
  {
    title: `Machine Learning with OpenCV and JavaScript: Recognizing Handwritten Letters using HOG and SVM`,
    description: `This tutorial teaches you how to train your own Support Vector Machine (SVM) from a set of training images for image classification with OpenCV and JavaScript.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://medium.com/@muehler.v/machine-learning-with-opencv-and-javascript-part-1-recognizing-handwritten-letters-using-hog-and-88719b70efaa',
      releaseDate: format(new Date(2017, 9, 20), 'MM/DD/YYYY'),
    },
  },
  {
    title: `Linear Regression with Gradient Descent in JavaScript`,
    description: `The article guides you through implementing linear regression with gradient descent in JavaScript. The article can be used as introduction to machine learning in JavaScript and as entry point to a whole blog post series.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/linear-regression-gradient-descent-javascript/',
      releaseDate: format(new Date(2017, 10, 19), 'MM/DD/YYYY'),
    },
  },
  {
    title: `Node.js + OpenCV for Face Recognition`,
    description: `This tutorial builds with you a simple Node.js face recognition example with the OpenCV's face module.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://medium.com/@muehler.v/node-js-opencv-for-face-recognition-37fa7cb860e8',
      releaseDate: format(new Date(2017, 11, 7), 'MM/DD/YYYY'),
    },
  },
  {
    title: `Improving Gradient Descent in JavaScript`,
    description: `When using gradient descent as learning algorithm for a regression problem, there are several ways to improve it. In the beginning, it is often unclear how to optimize it. This article shows it by choosing the right learning rate and initial parameters, applying feature scaling and vectorization.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/improving-gradient-descent-javascript/',
      releaseDate: format(new Date(2017, 11, 16), 'MM/DD/YYYY'),
    },
  },
  {
    title: `Gradient Descent with Vectorization in JavaScript`,
    description: `The article guides you through implementing a vectorized implementation of gradient descent for a regression problem in JavaScript. You should be familiar with gradient itself by reading the introductory article before diving into this topic.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/linear-regression-gradient-descent-vectorization-javascript/',
      releaseDate: format(new Date(2017, 11, 21), 'MM/DD/YYYY'),
    },
  },
  {
    title: `Multivariate Linear Regression, Gradient Descent in JavaScript`,
    description: `The article guides you through implementing linear regression with gradient descent in a multivariate training set in JavaScript. It shows the vectorized implementation of the algorithm and performs feature scaling by using standardization before applying the learning algorithm.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/multivariate-linear-regression-gradient-descent-javascript/',
      releaseDate: format(new Date(2017, 11, 23), 'MM/DD/YYYY'),
    },
  },
  {
    title: `Linear Regression with Normal Equation in JavaScript`,
    description: `The article guides you through implementing normal equation as alternative to gradient descent to solve a regression problem in JavaScript. You should learn about gradient descent before diving into this topic.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/multivariate-linear-regression-normal-equation-javascript/',
      releaseDate: format(new Date(2017, 12, 2), 'MM/DD/YYYY'),
    },
  },
  {
    title: `Logistic Regression with Gradient Descent in JavaScript`,
    description: `The article guides you through implementing a logistic regression with gradient descent algorithm in JavaScript to solve a classification problem. You should read the article about linear regression with gradient descent before diving into logistic regression.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/logistic-regression-gradient-descent-classification-javascript/',
      releaseDate: format(new Date(2017, 12, 4), 'MM/DD/YYYY'),
    },
  },
  {
    title: `Neural Networks in JavaScript with deeplearn.js`,
    description: `The article guides you through the implementation of a neural network in JavaScript with Google's deeplearn.js library. In general, it should show how machine learning can be achieved in JavaScript.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://www.robinwieruch.de/neural-networks-deeplearnjs-javascript',
      releaseDate: format(new Date(2017, 12, 5), 'MM/DD/YYYY'),
    },
  },
  {
    title: `Node.js meets OpenCV’s Deep Neural Networks`,
    description: `This tutorial teaches you how to load pretrained models from Tensorflow and Caffe with OpenCV’s DNN module. You will dive into two examples for object recognition with Node.js and OpenCV.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://medium.com/@muehler.v/node-js-meets-opencvs-deep-neural-networks-fun-with-tensorflow-and-caffe-ff8d52a0f072',
      releaseDate: format(new Date(2017, 12, 8), 'MM/DD/YYYY'),
    },
  },
  {
    title: `A Web Developer\'s Guide to Machine Learning in JavaScript`,
    description: `The article guides you through implementing Machine Learning in JavaScript. The article can be used as introduction to machine learning in JavaScript and as entry point to a whole blog post series.`,
    values: {
      articleType: ARTICLE_TYPES.discussion,
      articleLink: 'https://www.robinwieruch.de/machine-learning-javascript-web-developers',
      releaseDate: format(new Date(2018, 1, 10), 'MM/DD/YYYY'),
    },
  },
  {
    title: `You can build a neural network in JavaScript even if you don’t really understand neural networks`,
    description: `The article guides you through implementing a neural network with Brain.js in JavaScript. It's a dead-simple, beginner level explanation of how to implement Brain.js that goes a bit beyond the documentation.`,
    values: {
      articleType: ARTICLE_TYPES.tutorial,
      articleLink: 'https://itnext.io/you-can-build-a-neural-network-in-javascript-even-if-you-dont-really-understand-neural-networks-e63e12713a3',
      releaseDate: format(new Date(2018, 3, 12), 'MM/DD/YYYY'),
    },
  },
].reverse();

export const BLOG_MAIN = {
  header: 'Blog',
  paragraph: 'Insightful articles about machine learning in JavaScript to bring you up to speed.',
};
