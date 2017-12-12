import React from 'react';
import styled from 'styled-components';

import Link from '../Link';
import config from '../../config';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Footer = () =>
  <FooterContainer>
    <p>
      {config.footerLinks.map((link, i) =>
        <span>
          <Link href={link.url}>
            {link.label}
          </Link>
          <span> / </span>
        </span>
      )}
    </p>
  </FooterContainer>

export default Footer;
