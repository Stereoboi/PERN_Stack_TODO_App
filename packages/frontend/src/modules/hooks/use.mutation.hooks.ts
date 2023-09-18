/* eslint-disable arrow-body-style */
import { useMutation, useQuery } from 'react-query';
import { TodoItem, TodoCreateItem, ApiResponseGetAll } from '../common/types/get.all.type';
// eslint-disable-next-line import/no-cycle
import { queryClient } from '../app';
import { APP_KEYS } from '../common/consts';
import { apiTodo } from '../services/todo.api';

export const useGetAllTodos = (queryKey: string) => {
  const query = useQuery<ApiResponseGetAll>({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await apiTodo.getAllTodo({ key: queryKey });

      return response;
    }
  });

  return { query };
};

export const useMutationUpdate = () => {
  const mutation = useMutation(
    ({ id, description, title, complete, access }: TodoItem) => {
      return apiTodo.updateTodoById(id, { description, title, complete, access });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
      onError: () => {
        queryClient.invalidateQueries();
      }
    }
  );
  return { mutation };
};

export const useMutationDelete = () => {
  const mutation = useMutation(
    (id: number) => {
      return apiTodo.deleteTodoById(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
      onError: () => {
        queryClient.invalidateQueries();
      }
    }
  );
  return { mutation };
};

export const useMutationCreateTodo = () => {
  const mutation = useMutation(
    (todo: TodoCreateItem) => {
      return apiTodo.postTodo(todo);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      }
    }
  );
  return { mutation };
};

export const useGetTodoById = (id: number) => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODO_ID],
    queryFn: async () => {
      const response = await apiTodo.getTodoById(id);
      return response;
    }
  });

  return { data, isLoading, isSuccess };
};
