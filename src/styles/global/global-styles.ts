import { createGlobalStyle } from 'styled-components';

import normalize from '../normalize/normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  
  html {
    font-size: 50%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: ${({ theme }) => theme.font.family.inter};
    font-size: ${({ theme }) => theme.font.size[2]};
  }
`;

export { GlobalStyles };
