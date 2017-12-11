import React from 'react';
import styled from 'styled-components';

import { TABLET_SIZE, MOBILE_SIZE } from '../../constants/media';

const Section = styled.section`
  display: flex;
  padding: 40px 150px;

  &:nth-child(odd) {
    background: #ffffff;
  }

  &:nth-child(even) {
    background: #fafafa;
    flex-direction: row-reverse;
  }

  @media (max-width: ${TABLET_SIZE}px) {
    flex-direction: column;
    padding: 20px 75px;

    &:nth-child(even) {
      flex-direction: column;
    }
  }

  @media (max-width: ${MOBILE_SIZE}px) {
    flex-direction: column;
    padding: 20px 0px;

    &:nth-child(even) {
      flex-direction: column;
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid;
    border-color: #eaeaea;
  }
`;

export default Section;