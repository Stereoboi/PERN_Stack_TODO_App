/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import { InputFieldComponent } from '../input-field/input-field';
import { registerSchemaValidation } from '../../../services/validation';
import { Loader } from '../loader';
import { StyledBtn } from '../button';
import { useRegister, useUpdatePassword } from '../../../hooks/use.auth.hooks';
import { APP_KEYS } from '../../consts';
import {
  StyledFormWrapper,
  StyledFormPageWrapper,
  StyledFormTitle,
  Form,
  ButtonWrapper
} from './auth.form.styled';

export const RegisterForm = () => {
  const location = useLocation();
  const updatePassword = location.pathname.includes('profile');
  const navigate = useNavigate();

  const {
    mutation: { mutate: updatePasswordMutate, isSuccess: successUpdate, isError: updateError }
  } = useUpdatePassword();

  useEffect(() => {
    if (successUpdate) {
      toast.dismiss();
      toast.success('Your password was updated');
    }
  }, [successUpdate]);

  useEffect(() => {
    if (updateError) {
      toast.dismiss();
      toast.error('Something goes wrong, please try again');
    }
  }, [updateError]);

  const {
    mutation: { mutate, isLoading, isSuccess }
  } = useRegister();

  useEffect(() => {
    if (isSuccess) {
      toast.dismiss();
      toast.success('We sent a verification link to your email.');
    }
  }, [isSuccess]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: registerSchemaValidation,
    onSubmit: (values) => {
      const user = { email: values.email, password: values.password };
      if (updatePassword) {
        updatePasswordMutate(user);
      } else {
        mutate(user);
      }

      formik.resetForm();
    }
  });
  return (
    <StyledFormPageWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledFormWrapper>
          {location.pathname.includes('profile') ? (
            <StyledFormTitle>Change password</StyledFormTitle>
          ) : (
            <StyledFormTitle>Registration Form</StyledFormTitle>
          )}

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

            <InputFieldComponent
              label="Confirm password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && formik.errors.confirmPassword}
              placeholder="Confirm password"
            />

            <ButtonWrapper>
              {location.pathname.includes('profile') ? (
                <StyledBtn
                  variant="contained"
                  onClick={() => {
                    return navigate(APP_KEYS.ROUTER_KEYS.TODO);
                  }}
                >
                  Back
                </StyledBtn>
              ) : (
                <StyledBtn
                  variant="contained"
                  onClick={() => {
                    return navigate(APP_KEYS.ROUTER_KEYS.ROOT);
                  }}
                >
                  Back
                </StyledBtn>
              )}
              <StyledBtn variant="contained" type="submit">
                {updatePassword ? 'Update' : 'Register'}
              </StyledBtn>
            </ButtonWrapper>
          </Form>
        </StyledFormWrapper>
      )}
    </StyledFormPageWrapper>
  );
};
