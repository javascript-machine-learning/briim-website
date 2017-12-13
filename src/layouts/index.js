import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;

  ul {
    margin: 0.75em 0;
    padding: 0 1em;
    list-style: none;
    display: inline-block;
    text-align: left;
  }

  li {
    margin: 0;
    font-size: 14px;
    line-height: 1.75;
    opacity: .65;
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
    top: 1.2em;
    position: relative;
  }

  h3 {
    font-size: 22px;
    font-weight: normal;
    line-height: 34px;
    margin: 5px 0;
  }

  p {
    font-size: 14px;
    line-height: 1.75;
    opacity: .65;
  }
`;

const App = ({ children }) => (
  <AppWrapper>
    {children()}
  </AppWrapper>
);

App.propTypes = {
  children: PropTypes.func
};

export default App;
