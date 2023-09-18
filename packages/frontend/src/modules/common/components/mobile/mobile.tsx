/* eslint-disable import/no-cycle */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetAllTodos } from '../../../hooks/use.mutation.hooks';
import { TodoCard } from '../slider-todo-card';
import { StyledMobileListWrapper } from './mobile.styled';
import { APP_KEYS } from '../../consts';
import { EmptyText } from '../empty/empty.text';

export const MobileTodoList = () => {
  const location = useLocation();
  const currentURL = location.search;
  const {
    query: { data, isLoading }
  } = useGetAllTodos(APP_KEYS.QUERY_KEYS.TODOS + currentURL);

  return (
    <StyledMobileListWrapper>
      {!isLoading && data && data.data.data.length === 0 && <EmptyText />}
      {!isLoading &&
        data?.data.data.map((el) => {
          return <TodoCard key={el.id} data={el} />;
        })}
    </StyledMobileListWrapper>
  );
};
