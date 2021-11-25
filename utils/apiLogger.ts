import { AxiosRequestConfig } from 'axios';
import { CSSProperties } from 'react';
import { objToQueryString } from './objToQueryString';
import styledConsole, { StyledConsoleArgs } from './styled-console';

interface ApiLoggerArgs extends Pick<StyledConsoleArgs, 'method'> {
  status: string | number;
  reqData: AxiosRequestConfig;
  resData: any;
}

export const apiLogger = ({
  status,
  reqData,
  resData,
  method: consoleMethod = 'log',
}: ApiLoggerArgs) => {
  const { method, params, url } = reqData;
  const METHOD = method ? method.toUpperCase() : '';
  const paramSerialized = params ? objToQueryString(params) : '';

  styledConsole({
    topic: `${METHOD}:${status}`,
    topicColor: METHOD_COLOR_MAP[METHOD] || 'black',
    title: `${url}${paramSerialized}`,
    data: {
      req: reqData,
      res: resData,
    },
    method: consoleMethod,
  });
};

const METHOD_COLOR_MAP: Record<string, CSSProperties['color']> = {
  GET: 'skyblue',
  PATCH: 'green',
  POST: 'orange',
  PUT: 'darkorange',
  DELETE: 'red',
};
