import React from 'react';
import styled from 'styled-components';

const Uppercase = styled.span`
  text-transform: uppercase;
`

const DateDisplay = ({ date }) =>
  date
    ? <span>Release Date: <Uppercase>{date}</Uppercase></span>
    : null

export default DateDisplay;
