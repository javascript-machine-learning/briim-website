import React from 'react';
import styled, { css } from 'styled-components';

const alternating = css`
  flex-direction: row-reverse;
`;

const normal = css`
  flex-direction: row;
`;

import { TABLET_SIZE, MOBILE_SIZE } from '../../constants/media';

const Section = styled.section`
  display: flex;
  padding: 80px 150px;

  &:nth-child(odd) {
    background: #ffffff;
  }

  &:nth-child(even) {
    background: #fafafa;

    ${({ isAlternating }) => isAlternating ? alternating : normal}
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