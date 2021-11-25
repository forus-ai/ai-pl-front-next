import React from 'react';
import { useRouter } from 'next/router';
import { ROUTE } from 'constants/route';
import { useRootContext } from 'context/root';
import { socialLogin } from 'apis/auth';
import { deleteToken, setToken } from 'utils/localStorage/token';

const SocialCallbackPage = () => {
  const router = useRouter();
  const { state, code } = router.query;
  const {
    dispatch,
    handler: { openToast },
  } = useRootContext();

  React.useEffect(() => {
    async function login() {
      if (typeof state !== 'string') return;
      if (typeof code !== 'string') return;

      try {
        const data = await socialLogin({
          state,
          code,
        });
        const { access, refresh, isRegister } = data;
        // has Account
        if (isRegister) {
          setToken({ access, refresh, isRegister });
          openToast({
            status: 'success',
            description: '로그인에 성공했습니다.',
          });
          router.push(ROUTE.MAIN);
          return;
        }
        // no has Account
        openToast({
          status: 'info',
          description: '회원가입 후 이용해 주세요.',
        });
        setToken({ access, refresh, isRegister });
        router.push(ROUTE.SIGN_UP);
      } catch (error) {
        deleteToken();
        openToast({
          status: 'error',
          description: '로그인을 하지 못했습니다.',
        });
        router.push(ROUTE.MAIN);
      }
    }
    login();
  }, [code, dispatch, openToast, router, state]);
  return null;
};

export default SocialCallbackPage;
