interface TodoCreateItem {
  title: string;
  description: string;
  complete: boolean | undefined;
  access: boolean | undefined;
}

interface TodoItem {
  id: number;
  title: string;
  description: string;
  complete: boolean | undefined;
  access: boolean | undefined;
  [key: string]: any;
}

interface ApiResponseGetAll {
  status: 'success';
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isIdle: boolean;

  data: {
    data: TodoItem[];
    totalCount: number;
  };

  dataUpdatedAt: number;
  error: null | any;
  errorUpdatedAt: number;
  failureCount: number;
  errorUpdateCount: number;
  isFetched: boolean;
  isFetchedAfterMount: boolean;
  isFetching: boolean;
  isRefetching: boolean;
  isLoadingError: boolean;
  isPlaceholderData: boolean;
  isPreviousData: boolean;
  isRefetchError: boolean;
  isStale: boolean;
  query?: string;
}

export type { ApiResponseGetAll, TodoItem, TodoCreateItem };
