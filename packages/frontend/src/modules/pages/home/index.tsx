/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { StyledBtn } from '../../common/components/button';
import { HomePageWrapper, Title, AppDescription, ButtonWrapper } from './home.page.styled';
import { APP_KEYS } from '../../common/consts';
import { Loader } from '../../common/components/loader';

import { useGetStatus } from '../../hooks/use.auth.hooks';

const HomePageContainer = () => {
  const { isOnline, isLoading } = useGetStatus();
  return (
    <HomePageWrapper>
      <Title>Todo tracker</Title>
      <AppDescription>
        Todo tracker is the best way to be in touch with your tasks buddy
      </AppDescription>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isOnline ? (
            <StyledBtn variant="contained" href={APP_KEYS.ROUTER_KEYS.TODO}>
              Back to TODO Page
            </StyledBtn>
          ) : (
            <>
              <ButtonWrapper>
                <StyledBtn variant="contained" href={APP_KEYS.ROUTER_KEYS.LOGIN}>
                  Login
                </StyledBtn>
                <StyledBtn variant="contained" href={APP_KEYS.ROUTER_KEYS.REGISTER}>
                  Register
                </StyledBtn>
              </ButtonWrapper>
              <StyledBtn variant="contained" href={APP_KEYS.ROUTER_KEYS.TODO}>
                Visit like a guest
              </StyledBtn>
            </>
          )}
        </>
      )}
    </HomePageWrapper>
  );
};

export default HomePageContainer;
