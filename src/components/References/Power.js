import React from 'react';
import styled from 'styled-components';

const Uppercase = styled.span`
  text-transform: uppercase;
`

const Power = ({ power }) =>
  <span>Power: <Uppercase>{power}</Uppercase></span>

export default Power;
