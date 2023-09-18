/* eslint-disable import/no-cycle */

import React, { useMemo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { StyledPaginationWrapper, StyledPagination } from './pagination.styled';
import { useGetAllTodos } from '../../../hooks/use.mutation.hooks';
import { APP_KEYS } from '../../consts';

export const PaginationButtons = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState<number | undefined>();

  const status = searchParams.get('status');
  const search = searchParams.get('search');
  const page = searchParams.get('page');
  const currentPage = page ? parseInt(page, 10) : 1;

  const queryKey =
    APP_KEYS.QUERY_KEYS.TODOS +
    (status ? `?&status=${status}` : '') +
    (search ? `?&search=${search}` : '');

  const {
    query: { data, isLoading }
  } = useGetAllTodos(queryKey);

  useEffect(() => {
    if (!isLoading && data) {
      const amountOfPages = Math.ceil(data.data.totalCount / 6);
      setPages(amountOfPages);
    }
  }, [data]);

  const params = useMemo(() => {
    return Object.fromEntries([...searchParams]);
  }, [isLoading, searchParams]);

  const handleClickPage = (value: number) => {
    setSearchParams({ ...params, page: value.toString() });
  };

  return (
    <StyledPaginationWrapper>
      <Stack spacing={2}>
        <StyledPagination
          onChange={(e, value) => {
            return handleClickPage(value);
          }}
          count={pages}
          color="secondary"
          page={currentPage}
        />
      </Stack>
    </StyledPaginationWrapper>
  );
};
