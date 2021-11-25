import React from 'react';
import { getToken } from 'utils/localStorage/token';

export default function useIsLogged() {
  const [isLogged, setIsLogged] = React.useState(false);

  React.useEffect(() => {
    const isLogged = getIsLogged();
    setIsLogged(isLogged);
  }, []);

  return isLogged;
}

export const getIsLogged = () => {
  const { access, isRegister } = getToken();
  const isLogged = !!access && !!isRegister;
  return isLogged;
};
