import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../helper';

export const getToken = () => {
  const token = getLocalStorage<NullAble<Token>>('@ficl-token', {
    access: null,
    isRegister: false,
    refresh: null,
  });
  return token;
};

export const setToken = (token: Token) => {
  setLocalStorage('@ficl-token', token);
};

export const deleteToken = () => {
  removeLocalStorage('@ficl-token');
};
