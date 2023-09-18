/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */

import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ButtonGroupWrapper } from './button.group.styled';
import { categories } from '../../consts';
import FormDialog from '../modal/modal';
import { StyledBtn } from '../button/button.styled';

export const BasicButtonGroup = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return Object.fromEntries([...searchParams]);
  }, [searchParams]);

  const handleClickFilter = (value: any) => {
    setSearchParams({ status: value });
  };

  return (
    <ButtonGroupWrapper>
      <ButtonGroup
        sx={{ maxWidth: 'max-content' }}
        variant="contained"
        aria-label="outlined primary button group"
      >
        {categories.map((el, index) => {
          return (
            <StyledBtn
              onClick={() => {
                return handleClickFilter(el);
              }}
              key={index}
            >
              {el}
            </StyledBtn>
          );
        })}
      </ButtonGroup>

      <FormDialog action="create" />
    </ButtonGroupWrapper>
  );
};
