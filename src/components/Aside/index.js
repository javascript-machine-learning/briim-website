import React from 'react';
import styled from 'styled-components';

import { TABLET_SIZE } from '../../constants/media';

const Aside = styled.aside`
  padding: 0 40px;
  flex-grow: 1;
  flex-basis: 0;

  @media (max-width: ${TABLET_SIZE}px) {
    text-align: center;
  }
`;

export default Aside;