import Router from 'next/dist/client/router';
import { ROUTE } from 'constants/route';
import { deleteToken, getToken, setToken } from 'utils/localStorage/token';
import instance from 'apis/config';

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

export async function socialLogin(variables: {
  state: string;
  code: string;
}): Promise<{
  access: string;
  refresh: string;
  isRegister: true;
}> {
  const { data } = await instance({
    method: 'POST',
    url: '/social_login/',
    data: variables,
  });

  return data;
}

export async function signUp(variables: {
  username: string;
  email: string;
  phone: string;
  code: string;
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

export async function verifyPhone(variables: {
  //
  phone: string;
}): Promise<{
  phone: string;
  code: string;
}> {
  const { data } = await instance({
    method: 'POST',
    url: '/phone_verifier/',
    data: variables,
  });
  return data;
}

export async function verifyPhoneConfirm(variables: {
  //
  phone: string;
  code: string;
}): Promise<{
  token: string;
}> {
  const { data } = await instance({
    method: 'POST',
    url: '/phone_verifier/confirm/',
    data: variables,
  });

  return data;
}
