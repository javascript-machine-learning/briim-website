import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Link from '../Link';
import config from '../../config';

const NAVBAR_HEIGHT = 55;

const landingNav = css`

`;

const nonLandingNav = css`
  background-color: #ffffff;
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
  z-index: 1;

  ${({ isLanding }) => isLanding ? landingNav : nonLandingNav}
`

const landingLink = css`
  color: #ffffff;
  opacity: .35;
  transition: opacity .25s ease-in-out;

  &:hover {
    color: #ffffff;
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

const NavbarLink =  styled(({ isLanding, ...rest }) => <Link { ...rest } />)`
  font-size: 12px;
  letter-spacing: 3.5px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 15px;
  text-decoration: none;

  ${({ isLanding }) => isLanding ? landingLink : nonLandingLink}
`

const NavbarLinkBack = NavbarLink.extend`
  align-self: flex-start;
`

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowHeight: 0,
      isLanding: true,
    };

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.setState(() => ({ windowHeight: window.innerHeight }));

    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  onScroll(event) {
    const { windowHeight } = this.state;

    if((window.scrollY + NAVBAR_HEIGHT) < windowHeight) {
      this.setState(() => ({ isLanding: true }));
    } else {
      this.setState(() => ({ isLanding: false }));
    }
  }

  onResize(event) {
    this.setState(() => ({
      windowHeight: window.innerHeight,
    }));
  }

  render() {
    const { isLanding } = this.state;
    const { hasBack } = this.props;

    return (
      <header>
        <Navbar isLanding={isLanding}>

          { hasBack && <NavbarLinkBack isLanding={isLanding} to={'/'}>back</NavbarLinkBack> }

          {config.navigationLinks.map((link, i) =>
            <NavbarLink key={i} isLanding={isLanding} to={link.url}>{link.label}</NavbarLink>
          )}
        </Navbar>
      </header>
    );
  }
}

export default Navigation;