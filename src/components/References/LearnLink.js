import React from 'react';
import Link, { Anchor } from '../Link';

const LearnLink = ({ learn, linkType }) =>
  linkType === 'RELATIVE'
    ? <Link to={learn}>Dive into the Material</Link>
    : <Anchor href={learn}>Dive into the Material</Anchor>

export default LearnLink;
