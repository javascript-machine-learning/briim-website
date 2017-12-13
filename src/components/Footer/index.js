import React from 'react';
import styled from 'styled-components';

import { Anchor } from '../Link';
import config from '../../config';

const FooterContainer = styled.p`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Footer = () =>
  <FooterContainer>
    {config.footerLinks.map((link, i) =>
      <span key={i}>
        <Anchor href={link.url}>
          {link.label}
        </Anchor>
        {i + 1 < config.footerLinks.length ? <span>&nbsp;/&nbsp;</span> : null}
      </span>
    )}
  </FooterContainer>

export default Footer;
