import React from 'react';
import styled from 'styled-components';

const FadeIn = styled.div`
  animation: fadeIn 0.5s ease-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

export default FadeIn;