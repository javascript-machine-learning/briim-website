import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Landing from '../components/Landing';
import Footer from '../components/Footer';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;

  ul {
      margin: 0.75em 0;
      padding: 0 1em;
      list-style: none;
  }
  li:before {
      content: "";
      border-color: transparent #111;
      border-style: solid;
      border-width: 0.35em 0 0.35em 0.45em;
      display: block;
      height: 0;
      width: 0;
      left: -1em;
      top: 1.1em;
      position: relative;
  }

  h3 {
    font-size: 22px;
    font-weight: normal;
    line-height: 34px;
  }

  p {
    opacity: .65;
  }
`;
    // font-size: 22px;
    // font-weight: normal;
    // line-height: 34px;

const Meta = ({}) =>
  <Helmet
    meta={[
      {
        name: 'description',
        content: 'machine learning javascript'
      },
      { name: 'keywords', content: 'machine learning javascript' }
    ]}
    links={[
      {
        rel: 'shortcut icon',
        type: 'image/png',
        sizes: '16x16',
        href: __PATH_PREFIX__ + '/favicons/favicon-16x16.png'
      }
    ]}
  />

const App = ({ children }) => (
  <AppWrapper>
    <Meta />

    <Landing />
    {children()}
    <Footer />
  </AppWrapper>
);

App.propTypes = {
  children: PropTypes.func
};

export default App;
