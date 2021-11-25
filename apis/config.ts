import axios from 'axios';
import Router from 'next/dist/client/router';

import { setAuthHeader } from 'apis';
import { refreshToken } from './auth';
import { apiLogger } from 'utils/apiLogger';
import { deleteToken, getToken } from 'utils/localStorage/token';
import { ROUTE } from 'constants/route';
import { CONFIG } from 'constants/config';
import styledConsole from 'utils/styled-console';

const isServer = typeof window === 'undefined';
const isClient = !isServer;
const isDev = CONFIG.ENV === 'development';

const instance = axios.create({
  baseURL: CONFIG.FICL_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async (config) => {
    const updatedConfig = { ...config };

    if (isServer) return config;
    const token = await getToken();
    const isAccess = token && token.access;
    if (isAccess) {
      updatedConfig.headers = {
        ...updatedConfig.headers,
        Authorization: 'Bearer ' + (token as Token).access,
      };
    }
    return updatedConfig;
  },
  (error) => {
    Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res) => {
    const { status, config: reqData, data: resData } = res;
    apiLogger({ status, reqData, resData });
    return res;
  },
  async (error) => {
    try {
      const { response: res, config: reqData } = error;
      const { status } = res;
      const isUnAuthError = status === 401;
      const isExpiredToken = status === 444;
      const isCriticalError = !res || !reqData;

      if (isCriticalError) {
        console.error('CRITICAL SERVER ERROR');
        const customError = new Error('SERVER_DOWN');
        return Promise.reject(customError);
      }

      if (isDev)
        apiLogger({ status, reqData, resData: error, method: 'error' });

      if (isExpiredToken) {
        await refreshToken();
        const { access: newAccess } = getToken() || {};
        if (newAccess) setAuthHeader(newAccess);
        return instance(reqData);
      }

      if (isUnAuthError) {
        deleteToken();
        if (isClient) Router.push(ROUTE.LOGIN);
        return Promise.reject({ status });
      }

      return Promise.reject({ status });
    } catch (e) {
      styledConsole({
        //
        method: 'error',
        topic: 'UN_HANDLED',
        title: 'axios-interceptor',
        data: e,
      });
    }
  },
);

export default instance;
