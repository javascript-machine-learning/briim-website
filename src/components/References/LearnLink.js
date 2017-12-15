import React from 'react';
import Link, { Anchor } from '../Link';

const LearnLink = ({ learn, linkType }) =>
  linkType === 'RELATIVE'
    ? <Link to={learn}>Pick up the Material</Link>
    : <Anchor href={learn}>Pick up the Material</Anchor>

export default LearnLink;
