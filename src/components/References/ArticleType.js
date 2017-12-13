import React from 'react';
import styled from 'styled-components';
import Link from '../Link';

const Uppercase = styled.span`
  text-transform: uppercase;
`

const ArticleType = ({ articleType }) =>
  <Uppercase>{articleType}</Uppercase>

export default ArticleType;
