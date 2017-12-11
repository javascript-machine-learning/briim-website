import React from 'react';
import styled from 'styled-components';

import FadeIn from '../FadeIn';
import { TABLET_SIZE, MOBILE_SIZE } from '../../constants/media';

const Image = styled.img`
  margin-bottom: 0;
  padding: 20px;
  box-shadow: 0 20px 50px 0 rgba(0,0,0,0.12);
  border-radius: 2px;
  min-width: 320px;

  @media (max-width: ${TABLET_SIZE}px) {
    min-width: 280px;
  }

  @media (max-width: ${MOBILE_SIZE}px) {
    min-width: 240px;
  }
`;

const ImageFadeIn = (props) =>
  <FadeIn>
    <Image { ...props } />
  </FadeIn>

export {
  ImageFadeIn,
};

export default Image;