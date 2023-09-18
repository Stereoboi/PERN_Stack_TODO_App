/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import { useMutation, useQuery } from 'react-query';
import { queryClient } from '../app';
import { apiUser } from '../services/user.api';
import { IUser } from '../common/types/user.types';

export const useRegister = () => {
  const mutation = useMutation(
    (user: IUser) => {
      return apiUser.registerUser(user);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      }
    }
  );
  return { mutation };
};

export const useLogin = () => {
  const mutation = useMutation(
    (user: IUser) => {
      return apiUser.loginUser(user);
    },
    {
      onMutate: (data) => {
        return data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries();
      }
    }
  );
  return { mutation };
};
export const useLogOut = () => {
  const mutation = useMutation(
    () => {
      return apiUser.logOutUser();
    },
    {
      onMutate: (data) => {
        return data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries();
      }
    }
  );
  return { mutation };
};

export const useGetStatus = () => {
  const { isSuccess, data, isLoading, isFetching } = useQuery({
    queryFn: async () => {
      const response = await apiUser.getStatus();
      return response;
    }
  });
  const result = { isOnline: null, isLoading, isFetching };

  if (isSuccess) {
    result.isOnline = data.response.isOnline;
  }

  return result;
};

export const useUpdatePassword = () => {
  const mutation = useMutation(
    (user: IUser) => {
      return apiUser.changePassword(user);
    },
    {
      onMutate: (data) => {
        return data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries();
      }
    }
  );
  return { mutation };
};
