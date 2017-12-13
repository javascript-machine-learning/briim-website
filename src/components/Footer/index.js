import React from 'react';
import styled from 'styled-components';

import Link from '../Link';
import config from '../../config';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = () =>
  <FooterContainer>
    <p>
      {config.footerLinks.map((link, i) =>
        <span key={i}>
          <Link to={link.url}>
            {link.label}
          </Link>
          {i + 1 < config.footerLinks.length ? <span> / </span> : null}
        </span>
      )}
    </p>
  </FooterContainer>

export default Footer;
