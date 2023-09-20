/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import * as React from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import { Loader } from '../loader';
import { EmptyText } from '../empty/empty.text';
import { StyledBtn, StyledSwitch, StyledSwitchWrapper } from '../button';
import { TodoItem } from '../../types/get.all.type';
import { COLORS, SHADOW } from '../../../theme';
import { useGetStatus } from '../../../hooks/use.auth.hooks';
import {
  useMutationUpdate,
  useMutationDelete,
  useGetAllTodos
} from '../../../hooks/use.mutation.hooks';
import { APP_KEYS } from '../../consts';
import {
  StyledTableHead,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableRow,
  StyledTableCellDescription,
  StyledTableCellAction
} from './table.styled';

export const BasicTable = () => {
  const location = useLocation();
  const currentURL = location.search;

  const {
    query: { data, isLoading: todosLoading }
  } = useGetAllTodos(APP_KEYS.QUERY_KEYS.TODOS + currentURL);

  // const { isOnline, isLoading: statusLoading } = useGetStatus();
  const token = localStorage.getItem('token');

  const isOnline = token;

  const {
    mutation: { mutate: deleteMutate, isError: deleteError, isLoading: isDeleteLoading }
  } = useMutationDelete();

  const handleDeleteTodo = (id: number) => {
    deleteMutate(id);
  };

  const {
    mutation: { mutate: updateMutate, isError: updateError, isLoading: isUpdateLoading }
  } = useMutationUpdate();

  useEffect(() => {
    if (!isUpdateLoading && updateError) {
      toast.dismiss();
      toast.error('You do not have permission to update this todo');
    }
  }, [isUpdateLoading, updateError]);

  useEffect(() => {
    if (!isDeleteLoading && deleteError) {
      toast.dismiss();
      toast.error('You do not have permission to delete this todo');
    }
  }, [isDeleteLoading, deleteError]);

  const handleSwitch = (value: TodoItem) => {
    const updatedTodoItem = { ...value, complete: !value.complete };

    if (!todosLoading) {
      updateMutate(updatedTodoItem);
    }
  };

  return (
    <div style={{ height: '100%' }}>
      <TableContainer
        component={Paper}
        sx={{ margin: '15px auto 0', boxShadow: `${SHADOW.normal}` }}
      >
        {todosLoading ? (
          <Loader />
        ) : (
          <StyledTable aria-label="simple table">
            <StyledTableHead>
              <StyledTableRow>
                <StyledTableCell sx={{ textAlign: 'center', color: `${COLORS.secondary}` }}>
                  Title
                </StyledTableCell>
                <StyledTableCell
                  sx={{ textAlign: 'center', color: `${COLORS.secondary}` }}
                  align="right"
                >
                  Description
                </StyledTableCell>
                <StyledTableCell
                  sx={{ textAlign: 'center', color: `${COLORS.secondary}` }}
                  align="right"
                >
                  Actions
                </StyledTableCell>
              </StyledTableRow>
            </StyledTableHead>
            {!todosLoading && data && (
              <StyledTableBody>
                {data?.data.data.map((el: TodoItem) => {
                  return (
                    <StyledTableRow
                      key={el.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {el.title}
                      </StyledTableCell>
                      <StyledTableCellDescription align="right">
                        {el.description}
                      </StyledTableCellDescription>
                      <StyledTableCell align="right">
                        <StyledTableCellAction>
                          {data && isOnline && (
                            <>
                              <StyledBtn
                                variant="contained"
                                type="button"
                                onClick={() => {
                                  return handleDeleteTodo(el.id);
                                }}
                              >
                                Delete
                              </StyledBtn>
                              <StyledBtn variant="contained" type="button" href={`/todo/${el.id}`}>
                                View
                              </StyledBtn>
                              <StyledSwitchWrapper
                                sx={{ fontSize: '10px' }}
                                control={
                                  <StyledSwitch
                                    sx={{ margin: '0', fontFamily: 'Capriola' }}
                                    name="private"
                                    checked={el.complete}
                                    onClick={() => {
                                      return handleSwitch(el);
                                    }}
                                  />
                                }
                                label="Done"
                                labelPlacement="top"
                              />
                            </>
                          )}
                        </StyledTableCellAction>

                        {data && !isOnline && (
                          <StyledBtn variant="contained" type="button" href={`/todo/${el.id}`}>
                            View
                          </StyledBtn>
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </StyledTableBody>
            )}
          </StyledTable>
        )}
      </TableContainer>
      {!todosLoading && data && data.data.data.length === 0 && <EmptyText />}
    </div>
  );
};
