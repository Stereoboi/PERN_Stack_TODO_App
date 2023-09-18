/* eslint-disable import/no-cycle */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { RestrictedRouteProps } from '../common/types/routes.types';

export const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo
}) => {
  const token = localStorage.getItem('token');

  const isOnline = token;

  return isOnline ? <Navigate to={redirectTo} /> : <Component />;
};
