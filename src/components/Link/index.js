import React from 'react';
import GatsbyLink from 'gatsby-link';
import styled, { css } from 'styled-components';

const linkBase = css`
  text-decoration: none;

  &:hover {
    opacity: 1;
    color: inherit;
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }
`

const Link = styled(GatsbyLink)`
  ${linkBase}
`;

const Anchor = styled.a`
  ${linkBase}
`;

export {
  Anchor,
};

export default Link;
