import { AxiosRequestConfig } from 'axios';
import {
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
} from 'react-query';

type OptionalVariables<T> = undefined extends T
  ? { variables?: T }
  : { variables: T };

type QueryHookParams<T extends (any?: any) => Promise<any>> = {
  options?: UseQueryOptions<UnboxPromise<ReturnType<T>>>;
} & OptionalVariables<Parameters<T>[0]>;

type InfiniteQueryHookParams<T extends (any?: any) => Promise> = {
  options?: UseInfiniteQueryOptions<UnboxPromise<ReturnType<T>>>;
} & OptionalVariables<Parameters<T>[0]>;

type MutationHookParams<T extends (any?: any) => Promise<any>> = {
  options?: UseMutationOptions<
    UnboxPromise<ReturnType<T>>,
    unknown,
    undefined extends Parameters<T>[0]
      ? Parameters<T>[0] | void
      : Parameters<T>[0],
    unknown
  >;
};

type CustomResponseError = {
  code?: string;
  config?: AxiosRequestConfig;
  response?: {
    config: AxiosRequestConfig;
    data: any;
    headers: Headers;
    request: XMLHttpRequest;
    status: number;
    statusText: string;
  };
};

type PageNationResponse<T> = {
  count: number;
  /** next url: ex)"https://api.antlife.net/v1/post/?page=2" */
  next: string | null;
  /** previous url: ex)"https://api.antlife.net/v1/post/?page=2" */
  previous: string | null;
  results: T;
};
