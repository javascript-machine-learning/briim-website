import React from 'react';
import styled from 'styled-components';

const Uppercase = styled.span`
  text-transform: uppercase;
`

const Level = ({ level }) =>
  <span>Level: <Uppercase>{level}</Uppercase></span>

export default Level;
