import React from 'react';
import styled from 'styled-components';
import Link from '../Link';

const Uppercase = styled.span`
  text-transform: uppercase;
`

const LearningType = ({ type }) =>
  <span>Category: <Uppercase>{type}</Uppercase></span>

export default LearningType;
