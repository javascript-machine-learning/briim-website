import React from 'react';
import styled from 'styled-components';

import banner from '../../assets/banner.jpg';
import FadeIn from '../FadeIn';
import Navigation from '../Navigation';

const Caption = styled.div`
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CaptionHeader = styled.h1`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 5.5px;
  color: #ffffff;
  margin: 0px;
`

const CaptionSubheader = styled.h2`
  margin-top: 5px;
  font-size: 12px;
  letter-spacing: 3.5px;
  font-weight: 500;
  text-transform: uppercase;
  max-width: 400px;

  color: #ffffff;
  opacity: .35;
`

const BackgroundImage = FadeIn.extend`
  background-image: url(${banner});
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 100%;
  display: block;
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.8;
  }
`

const Landing = ({ header, subheader, hasBack }) =>
  <BackgroundImage>
    <Navigation hasBack={hasBack} />
    <Caption>
      <CaptionHeader>{header}</CaptionHeader>
      <CaptionSubheader>{subheader}</CaptionSubheader>
    </Caption>
  </BackgroundImage>

export default Landing;