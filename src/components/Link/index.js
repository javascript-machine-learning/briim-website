import React from 'react';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';

const Link = styled(GatsbyLink)`
  text-decoration: none;

  &:hover {
    opacity: 1;
    color: inherit;
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }
`;

export default Link;
