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
    <p>
      <Link href="###mailto:briim@gmail.com">
        Contact
      </Link>
      <span> / </span>
      <Link href="https://www.getrevue.co/profile/briim">
        Newsletter
      </Link>
      <span> / </span>
      <Link href="#">
        Slack
      </Link>
      <span> / </span>
      <Link href="#">
        GitHub
      </Link>
      <span> / </span>
      <Link href="https://twitter.com/rwieruch">
        Twitter
      </Link>
    </p>
  </FooterContainer>

export default Footer;
