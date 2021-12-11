import React from 'react';

import { Box } from '@chakra-ui/layout';

import { ROUTE } from 'constants/route';
import { useRootContext } from 'context/root';
import { getToken } from 'utils/localStorage/token';

import { useRouter } from 'next/router';

interface MainProps {}

const Main = ({}: MainProps) => {
  const router = useRouter();
  const {
    handler: { openToast },
  } = useRootContext();

  //For : validates un-logged user
  React.useEffect(() => {
    const isLogged = !!getToken().access;
    if (!isLogged) {
      openToast({
        id: 'main-verify-login',
        status: 'warning',
        description: '로그읜 된 유저만 이용가능 합니다.',
      });
      router.push(ROUTE.LOGIN);
    }
  }, [openToast, router]);

  return <Basis>main </Basis>;
};

export default Main;

const Basis = Box;
