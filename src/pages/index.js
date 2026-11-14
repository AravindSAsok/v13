import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Head } from '@components';
import { GlobalStyle, theme } from '@styles';
import Portfolio from '@components/sections/portfolio';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Head
        title="Aravind S Asok"
        description="Aravind S Asok — software engineer building reliable backend systems, APIs, and practical AI applications."
      />
      <Portfolio />
    </>
  </ThemeProvider>
);

export default IndexPage;
