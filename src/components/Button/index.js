import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border: 1px solid #000000;
  border-radius: 0px;
  height: 20px;
  line-height: 20px;
  color: #000000;
  background-clip: padding-box;
  padding: 0.5em 1.5em;
  font-weight: bold;
  transition: all 0.2s ease-out;
  background: transparent;
  box-sizing: content-box;
  cursor: pointer;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
`;

export default Button;
