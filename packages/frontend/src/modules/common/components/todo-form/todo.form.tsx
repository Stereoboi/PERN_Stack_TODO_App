/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import DialogActions from '@mui/material/DialogActions';
import { InputFieldComponent } from '../input-field';
import { TodoStyledForm } from './todo.form.srtyled';
import { TodoFormProps } from '../../types/todo.form.types';
import { useMutationCreateTodo, useMutationUpdate } from '../../../hooks/use.mutation.hooks';
import { StyledBtn, StyledSwitch, StyledSwitchWrapper } from '../button';
import { todoSchemaValidation } from '../../../services/validation';

export const TodoFormComponent: React.FC<TodoFormProps> = ({ handleClose, action, data }) => {
  const {
    mutation: { mutate: createTodo, isError: createError }
  } = useMutationCreateTodo();

  const {
    mutation: { mutate: updateTodo, isError: updateError }
  } = useMutationUpdate();

  useEffect(() => {
    if (updateError) {
      toast.error('You do not have permission to update this todo');
    }
  }, [updateError]);

  useEffect(() => {
    if (createError) {
      toast.error('Something goes wrong, please try again');
    }
  }, [createError]);

  const formik = useFormik({
    initialValues: {
      title: data ? data.title : '',
      description: data ? data.description : '',
      private: data?.access || false,
      complete: data?.complete || false
    },
    validationSchema: todoSchemaValidation,
    onSubmit: (values) => {
      const submitedData = {
        title: values.title,
        description: values.description,
        access: values.private,
        complete: values.complete || false
      };

      if (action === 'update' && data) {
        updateTodo({ ...submitedData, id: data.id });
      } else {
        createTodo(submitedData);
      }

      formik.resetForm();
      handleClose();
    }
  });
  return (
    <TodoStyledForm onSubmit={formik.handleSubmit}>
      <InputFieldComponent
        label="Title"
        id="title"
        name="title"
        type="text"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && formik.errors.title}
        placeholder="Title"
      />

      <InputFieldComponent
        label="Description"
        id="description"
        name="description"
        type="text"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && formik.errors.description}
        placeholder="Description"
      />
      <StyledSwitchWrapper
        sx={{ marginTop: '20px' }}
        control={
          <StyledSwitch
            name="private"
            checked={formik.values.private}
            onChange={formik.handleChange}
          />
        }
        label="Private"
      />
      <DialogActions>
        <StyledBtn variant="contained" onClick={handleClose}>
          Cancel
        </StyledBtn>
        <StyledBtn variant="contained" type="submit">
          accept
        </StyledBtn>
      </DialogActions>
    </TodoStyledForm>
  );
};
