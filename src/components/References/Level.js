import React from 'react';
import styled from 'styled-components';

const Uppercase = styled.span`
  text-transform: uppercase;
`

const Level = ({ level }) =>
  <span><Uppercase>{level}</Uppercase> Machine Learners</span>

export default Level;
