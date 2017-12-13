import React, { Component } from 'react';
import { buttonBase } from '../Button';

import styled from 'styled-components';

const ButtonButLink = styled.a`
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }

  ${buttonBase}
`

export default ButtonButLink;