import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

const Footer = () =>
  <FooterContainer>
    <small>
      Created by{' '}
      <Link href="https://www.robinwieruch.de/">
        Robin Wieruch
      </Link>
    </small>
  </FooterContainer>

export default Footer;
