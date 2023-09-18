/* eslint-disable import/no-cycle */
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { MainRouter } from '../navigation';

import * as theme from '../theme';
import * as Styled from './app.styled';
import '../../style.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      cacheTime: Infinity
    }
  }
});

const AppContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <MainRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
export default AppContainer;
