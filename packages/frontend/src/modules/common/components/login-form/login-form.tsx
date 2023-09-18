/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { queryClient } from '../../../app';
import { InputFieldComponent } from '../input-field/input-field';
import { useLogin } from '../../../hooks/use.auth.hooks';
import { loginSchemaValidation } from '../../../services/validation';
import { StyledBtn } from '../button';
import { APP_KEYS } from '../../consts';
import { Loader } from '../loader';
import {
  StyledFormPageWrapper,
  StyledFormWrapper,
  StyledFormTitle,
  ButtonWrapper,
  Form
} from '../registration-form';

export const LoginForm = () => {
  const navigate = useNavigate();
  const {
    mutation: { mutate, isLoading, isError, isSuccess, data }
  } = useLogin();

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem('token', `Bearer ${data.token}`);
      queryClient.invalidateQueries();
      navigate(APP_KEYS.ROUTER_KEYS.TODO);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.dismiss();
      toast.error('Something goes wrong, please try again');
    }
  }, [isError]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchemaValidation,
    onSubmit: (values) => {
      const user = { email: values.email, password: values.password };
      mutate(user);
      formik.resetForm();
    }
  });
  return (
    <StyledFormPageWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledFormWrapper>
          <StyledFormTitle>Login</StyledFormTitle>
          <Form onSubmit={formik.handleSubmit}>
            <InputFieldComponent
              label="Email"
              id="email"
              name="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && formik.errors.email}
              placeholder="Email"
            />

            <InputFieldComponent
              label="Password"
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
              placeholder="Password"
            />

            <ButtonWrapper>
              <StyledBtn
                variant="contained"
                onClick={() => {
                  return navigate(APP_KEYS.ROUTER_KEYS.ROOT);
                }}
              >
                Back
              </StyledBtn>
              <StyledBtn variant="contained" type="submit">
                Login
              </StyledBtn>
            </ButtonWrapper>
          </Form>
        </StyledFormWrapper>
      )}
    </StyledFormPageWrapper>
  );
};
