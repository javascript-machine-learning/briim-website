import React from 'react';
import styled from 'styled-components';

import { TABLET_SIZE } from '../../constants/media';

const Aside = styled.aside`
  padding: 0 40px;
  flex-grow: 1;
  flex-basis: 0;

  @media (max-width: ${TABLET_SIZE}px) {
    text-align: center;
    margin: 20px 0;
  }
`;

const BorderedAside = Aside.extend`
  ${({ direction }) => `border-${direction}: 1px solid #eaeaea;`}

  ${({ direction }) => `@media (max-width: ${TABLET_SIZE}px) {
    border-${direction}: 0px solid;
    border-bottom: 1px solid #eaeaea;
  }`}
`

export {
  BorderedAside,
};

export default Aside;