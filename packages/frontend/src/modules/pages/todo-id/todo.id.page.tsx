/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import FormControlLabel from '@mui/material/FormControlLabel';
import { useParams, useNavigate } from 'react-router-dom';
import { Loader } from '../../common/components/loader';
import FormDialog from '../../common/components/modal/modal';
import { StyledBtn, StyledSwitch, StyledSwitchWrapper } from '../../common/components/button';
import { useGetTodoById, useMutationUpdate } from '../../hooks/use.mutation.hooks';
import { TodoItem } from '../../common/types/get.all.type';
import {
  TodoIdPageWrapper,
  Wrapper,
  StyledTitle,
  StyledContentWrapper,
  StyledSubtitle,
  StyledText,
  StyledButtonWrapper,
  StyledSwitchesWrapper
} from './todo.id.page.styled';
import { APP_KEYS } from '../../common/consts';

const TodoIdPageContainer = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data, isLoading, isSuccess } = useGetTodoById(Number(id));

  const {
    mutation: { mutate: updateMutate, isError: updateError }
  } = useMutationUpdate();

  useEffect(() => {
    if (updateError) {
      toast.dismiss();
      toast.error('You do not have permission to update this todo');
    }
  }, [updateError]);

  const handleSwitch = (value: TodoItem, field: string) => {
    const updatedTodoItem = { ...value, [field]: !value[field] };
    updateMutate(updatedTodoItem);
  };

  return (
    <TodoIdPageWrapper>
      {isLoading ? (
        <Loader />
      ) : !isSuccess ? (
        <p> Oopss, something goes wrong ¯\_(ツ)_/¯</p>
      ) : data ? (
        <StyledContentWrapper>
          <StyledTitle>{data.title}</StyledTitle>
          <StyledSubtitle>Description</StyledSubtitle>
          <StyledText>{data.description}</StyledText>
          <StyledSwitchesWrapper>
            <StyledSwitchWrapper
              control={
                <StyledSwitch
                  name="complete"
                  checked={data.complete}
                  onClick={() => {
                    return handleSwitch(data, 'complete');
                  }}
                />
              }
              label="Complete"
              labelPlacement="end"
            />
            <FormControlLabel
              control={
                <StyledSwitch
                  name="private"
                  checked={data.access}
                  onClick={() => {
                    return handleSwitch(data, 'access');
                  }}
                />
              }
              label="Private"
              labelPlacement="end"
            />
          </StyledSwitchesWrapper>
          <StyledButtonWrapper>
            <Wrapper>
              <StyledBtn
                variant="contained"
                onClick={() => {
                  return navigate(APP_KEYS.ROUTER_KEYS.TODO);
                }}
              >
                Back
              </StyledBtn>
            </Wrapper>
            <FormDialog action="update" />
          </StyledButtonWrapper>
        </StyledContentWrapper>
      ) : null}
    </TodoIdPageWrapper>
  );
};

export default TodoIdPageContainer;
