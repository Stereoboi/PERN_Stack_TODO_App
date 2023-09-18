/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo } from 'react';
import { useFormik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import { useScreen } from '../../hooks/use.screen';
// eslint-disable-next-line import/no-cycle
import { queryClient } from '../../app';
import { BasicTable } from '../../common/components/table/table';
import { PaginationButtons } from '../../common/components/button-pagination';
import { BasicButtonGroup } from '../../common/components/button-group/button.group';
import { InputFieldComponent } from '../../common/components/input-field';
import { SliderList } from '../../common/components/slider';
import { MobileTodoList } from '../../common/components/mobile';
import {
  ActionTodoWrapper,
  TodoPageWrapper,
  TodoNavigationWrapper,
  ButtonWrapper,
  StyledInputWrapper
} from './todo.page.styled';
import { StyledBtn } from '../../common/components/button';
import { APP_KEYS } from '../../common/consts';
import { useLogOut, useGetStatus } from '../../hooks/use.auth.hooks';

const TodoPageContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get('status');

  const params = useMemo(() => {
    return Object.fromEntries([...searchParams]);
  }, [searchParams]);

  const { isMobile, isTablet, isDesk } = useScreen();
  const { mutation } = useLogOut();
  const { isOnline, isLoading } = useGetStatus();

  const onLogout = async () => {
    await mutation.mutateAsync();
    localStorage.removeItem('token');
    queryClient.invalidateQueries();
    queryClient.clear();
  };

  const formik = useFormik({
    initialValues: {
      search: ''
    },

    onSubmit: (values) => {
      if (values.search.trim() === '') {
        const nextParams = new URLSearchParams(searchParams);
        nextParams.delete('search');
        setSearchParams(nextParams);
      } else {
        setSearchParams({ status: status || '', search: values.search });
      }
    }
  });

  return (
    <>
      <TodoNavigationWrapper>
        {!isLoading && (
          <ButtonWrapper>
            {isOnline ? (
              <>
                <StyledBtn variant="contained" href={APP_KEYS.ROUTER_KEYS.PROFILE}>
                  profile
                </StyledBtn>
                <StyledBtn onClick={onLogout} variant="contained">
                  log out
                </StyledBtn>
              </>
            ) : (
              <>
                <StyledBtn variant="contained" href={APP_KEYS.ROUTER_KEYS.REGISTER}>
                  Register
                </StyledBtn>
                <StyledBtn href={APP_KEYS.ROUTER_KEYS.LOGIN} variant="contained">
                  log in
                </StyledBtn>
              </>
            )}
          </ButtonWrapper>
        )}
      </TodoNavigationWrapper>
      <TodoPageWrapper>
        <ActionTodoWrapper>
          <BasicButtonGroup />
          <StyledInputWrapper onSubmit={formik.handleSubmit}>
            <InputFieldComponent
              label="Search"
              id="search"
              name="search"
              type="text"
              value={formik.values.search}
              onChange={formik.handleChange}
              error={formik.touched.search && formik.errors.search}
              placeholder="Search"
            />
          </StyledInputWrapper>
        </ActionTodoWrapper>
        {isMobile && (
          <>
            <MobileTodoList />
            <PaginationButtons />
          </>
        )}{' '}
        {isTablet && <SliderList />}{' '}
        {isDesk && (
          <>
            <BasicTable />
            <PaginationButtons />
          </>
        )}
      </TodoPageWrapper>
    </>
  );
};

export default TodoPageContainer;
