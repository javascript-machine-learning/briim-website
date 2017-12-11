import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Footer = () =>
  <FooterContainer>
    <small>
      Created by{' '}
      <Link href="https://www.robinwieruch.de/">
        Robin Wieruch
      </Link>
      {' '}and built with{' '}
      <Link href="https://github.com/rwieruch/gatsby-movement">
        Gatsby.js
      </Link>
    </small>
  </FooterContainer>

export default Footer;
