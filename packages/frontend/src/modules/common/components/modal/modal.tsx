/* eslint-disable import/no-cycle */
import * as React from 'react';
import { useParams } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { TodoFormComponent } from '../todo-form';
import { useGetTodoById } from '../../../hooks/use.mutation.hooks';
import { ModalWrapper } from './modal.styled';
import { StyledBtn } from '../button';

export default function FormDialog({ action }: { action: string }) {
  const { id } = useParams();

  const getTodoData = action === 'update' ? useGetTodoById(Number(id)) : null;

  const data = getTodoData?.data;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalWrapper>
      <StyledBtn variant="contained" onClick={handleClickOpen}>
        {action}
      </StyledBtn>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontFamily: 'Capriola' }}>{action} todo</DialogTitle>
        <TodoFormComponent action={action} handleClose={handleClose} data={data} />
      </Dialog>
    </ModalWrapper>
  );
}
