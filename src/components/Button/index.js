import React from 'react';
import styled, { css } from 'styled-components';

import Link from '../Link';

const buttonBase = css`
  display: inline-block;
  border: 1px solid #000000;
  border-radius: 0px;
  color: #000000;
  background-clip: padding-box;
  padding: 0.5em 2.5em;
  background: transparent;
  box-sizing: content-box;
  cursor: pointer;

  font-size: 10px;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  line-height: 20px;
`

const Button = styled.button`
  ${buttonBase}

  &:focus {
    outline: none;
  }
`;

const ButtonButLink = styled(Link)`
  ${buttonBase}
`

const ButtonButAnchor = styled.a`
  ${buttonBase}
`

export {
  ButtonButAnchor,
  ButtonButLink,
};

export default Button;
