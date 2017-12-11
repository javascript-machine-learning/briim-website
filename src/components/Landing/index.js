import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import img from './banner.jpg';

const NAVBAR_HEIGHT = 55;

const Caption = styled.div`
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  text-align: center;
`;

const CaptionHeader = styled.h1`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 5.5px;
  color: #FFFFFF;
  margin: 0px;
`

const CaptionSubheader = styled.h2`
  margin-top: 5px;
  font-size: 12px;
  letter-spacing: 3.5px;
  font-weight: 500;
  text-transform: uppercase;

  color: #FFFFFF;
  opacity: .35;
`

const BackgroundImage = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 100%;
  display: block;
  background-size: cover;

  animation: fadeIn 0.5s ease-out;

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

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

const landingNav = css`

`;

const nonLandingNav = css`
  background-color: #FFFFFF;
  box-shadow: 0px 1px 20px -10px rgba(0,0,0,0.75);
  color: #a8a8a8;
`;

const Navbar = styled.nav`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  ${({ isLanding }) => isLanding ? landingNav : nonLandingNav}
`

const landingLink = css`
  color: #FFFFFF;
  opacity: .35;
  transition: opacity .25s ease-in-out;

  &:hover {
    color: #FFFFFF;
    opacity: 1;
  }
`

const nonLandingLink = css`
  color: #000000;
  opacity: .65;
  transition: opacity .50s ease-in-out;

  &:hover {
    color: #000000;
    opacity: 1;
  }
`

const NavbarLink = styled.a`
  font-size: 12px;
  letter-spacing: 3.5px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 15px;
  text-decoration: none;

  ${({ isLanding }) => isLanding ? landingLink : nonLandingLink}
`

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowHeight: window.innerHeight,
      isLanding: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      const { windowHeight } = this.state;

      if((window.scrollY + NAVBAR_HEIGHT) < windowHeight) {
        this.setState(() => ({ isLanding: true }));
      } else {
        this.setState(() => ({ isLanding: false }));
      }
    });

    window.addEventListener('resize', (event) => {
      this.setState(() => ({
        windowHeight: window.innerHeight,
      }));
    });
  }

  componentWillUnmount() {
    window.removeEventLister('scroll');
    window.removeEventListener('resize');
  }

  render() {
    const { isLanding } = this.state;

    return (
      <header>
        <Navbar isLanding={isLanding}>
          <NavbarLink isLanding={isLanding} href="#">Learn</NavbarLink>
          <NavbarLink isLanding={isLanding} href="#">Projects</NavbarLink>
          <NavbarLink isLanding={isLanding} href="#">Blog</NavbarLink>
        </Navbar>
      </header>
    );
  }
}

const Landing = () =>
  <BackgroundImage>
    <Navigation />
    <Caption>
      <CaptionHeader>Rim</CaptionHeader>
      <CaptionSubheader>Machine Learning in JavaScript</CaptionSubheader>
    </Caption>
  </BackgroundImage>

export default Landing;