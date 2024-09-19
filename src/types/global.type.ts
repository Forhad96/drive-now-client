export type TError = {
  data: {
    error: string;
    message: string;
    success: boolean;
  };

  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  message: string;
  success: boolean;
};

export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};
// export type TResponseRedux = TResponse & TMeta
