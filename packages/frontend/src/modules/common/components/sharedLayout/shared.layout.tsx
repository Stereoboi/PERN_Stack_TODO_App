import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Container } from '../container';

export const SharedLayout = () => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
