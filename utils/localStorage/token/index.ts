import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../helper';

export const getToken = () => {
  const token = getLocalStorage<NullAble<Token>>('@ForUs-token', {
    access: null,
    isRegister: false,
    refresh: null,
  });
  return token;
};

export const setToken = (token: Token) => {
  setLocalStorage('@ForUs-token', token);
};

export const deleteToken = () => {
  removeLocalStorage('@ForUs-token');
};
