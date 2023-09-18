/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { StyledBtn, StyledSwitch, StyledSwitchWrapper } from '../button';

import { useMutationUpdate, useMutationDelete } from '../../../hooks/use.mutation.hooks';
import { TodoItem } from '../../types/get.all.type';
import {
  StyledTabTodoWrapper,
  StyledTitle,
  StyledSubtitle,
  StyledText,
  ButtonWrapper
} from './slider.todo.card.styled';

export const TodoCard = ({ data }: { data: TodoItem }) => {
  const {
    mutation: { mutate: deleteMutate, isError: deleteError, isLoading: isDeleteLoading }
  } = useMutationDelete();
  const handleDeleteTodo = (id: number) => {
    deleteMutate(id);
  };

  const {
    mutation: { mutate: updateMutate, isError: updateError, isLoading: isUpdatingLoading }
  } = useMutationUpdate();

  useEffect(() => {
    if (!isUpdatingLoading && updateError) {
      toast.dismiss();
      toast.error('You do not have permission to update this todo');
    }
  }, [isUpdatingLoading, updateError]);

  useEffect(() => {
    if (!isDeleteLoading && deleteError) {
      toast.dismiss();
      toast.error('You do not have permission to delete this todo');
    }
  }, [isDeleteLoading, deleteError]);

  const handleSwitch = (value: TodoItem) => {
    const updatedTodoItem = { ...value, complete: !value.complete };
    updateMutate(updatedTodoItem);
  };

  return (
    <StyledTabTodoWrapper>
      <StyledTitle>{data.title}</StyledTitle>
      <StyledSubtitle>Description</StyledSubtitle>
      <StyledText>{data.description}</StyledText>
      <StyledSwitchWrapper
        control={
          <StyledSwitch
            name="private"
            checked={data.complete}
            onClick={() => {
              return handleSwitch(data);
            }}
          />
        }
        sx={{ marginTop: '5px' }}
        label="Done"
      />
      <ButtonWrapper>
        <StyledBtn
          variant="contained"
          type="button"
          onClick={() => {
            return handleDeleteTodo(data.id);
          }}
        >
          Delete
        </StyledBtn>
        <StyledBtn variant="contained" type="button" href={`/todo/${data.id}`}>
          View
        </StyledBtn>
      </ButtonWrapper>
    </StyledTabTodoWrapper>
  );
};
