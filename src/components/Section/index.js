import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  padding: 40px 120px;

  &:nth-child(odd) {
    background: #ffffff;
  }

  &:nth-child(even) {
    background: #fafafa;
    flex-direction: row-reverse;
  }

  &:not(:last-child) {
    border-bottom: 1px solid;
    border-color: #eaeaea;
  }
`;

export default Section;