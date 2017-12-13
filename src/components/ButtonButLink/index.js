import React, { Component } from 'react';
import { buttonBase } from '../Button';
import Link from '../Link';

import styled from 'styled-components';

const ButtonButLink = styled(Link)`
  ${buttonBase}
`

export default ButtonButLink;