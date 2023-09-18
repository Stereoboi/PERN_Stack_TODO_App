/* eslint-disable import/no-cycle */
import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { SharedLayout } from '../common/components/sharedLayout';
import { RestrictedRoute } from '../services/restricted-route';
import { APP_KEYS } from '../common/consts';

const Home = lazy(() => {
  return import('../pages/home');
});
const Todo = lazy(() => {
  return import('../pages/todo');
});
const TodoId = lazy(() => {
  return import('../pages/todo-id/todo.id.page');
});
const Login = lazy(() => {
  return import('../pages/login');
});
const Register = lazy(() => {
  return import('../pages/register');
});
const Profile = lazy(() => {
  return import('../pages/profile');
});

export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SharedLayout />} path={APP_KEYS.ROUTER_KEYS.ROOT}>
          <Route index element={<Home />} />
          <Route
            path={APP_KEYS.ROUTER_KEYS.LOGIN}
            element={<RestrictedRoute redirectTo={APP_KEYS.ROUTER_KEYS.TODO} component={Login} />}
          />
          <Route
            path={APP_KEYS.ROUTER_KEYS.REGISTER}
            element={
              <RestrictedRoute redirectTo={APP_KEYS.ROUTER_KEYS.TODO} component={Register} />
            }
          />
          <Route element={<Todo />} path={APP_KEYS.ROUTER_KEYS.TODO} />
          <Route element={<TodoId />} path={APP_KEYS.ROUTER_KEYS.TODO_ID} />
          <Route element={<Profile />} path={APP_KEYS.ROUTER_KEYS.PROFILE} />
          <Route />
        </Route>
      </Routes>
    </Router>
  );
};
