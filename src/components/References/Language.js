import React from 'react';
import styled from 'styled-components';
import Link from '../Link';

const Uppercase = styled.span`
  text-transform: uppercase;
`

const Language = ({ language }) =>
  language
    ? <span>Language: <Uppercase>{language}</Uppercase></span>
    : null

export default Language;
