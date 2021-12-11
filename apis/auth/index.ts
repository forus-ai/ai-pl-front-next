import instance from 'apis/config';
import { ROUTE } from 'constants/route';
import { deleteToken, getToken, setToken } from 'utils/localStorage/token';

import Router from 'next/dist/client/router';

const isClient = typeof window !== 'undefined';

export async function refreshToken() {
  try {
    const { refresh } = getToken() || {};
    if (!refresh) throw new Error('not found refresh-token');
    const { data }: { data: Token } = await instance.post(`/user/refresh/`, {
      refresh,
    });
    setToken(data);
  } catch (e) {
    console.error(e);
    deleteToken();
    if (isClient) Router.push(ROUTE.LOGIN);
  }
}

export async function signUp(variables: {
  username: string;
  email: string;
  password: string;
}): Promise<{
  access: string;
  refresh: string;
}> {
  const { data } = await instance({
    method: 'POST',
    url: '/register/',
    data: variables,
  });
  return data;
}
