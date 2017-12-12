import React, { Component } from 'react';
import Button from '../Button';

import styled from 'styled-components';

const ButtonButLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:visited {
    text-decoration: none;
    cursor: auto;
  }
`

export default ButtonButLink;