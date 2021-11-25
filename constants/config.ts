import deepFreeze from 'utils/deepFreeze';

export const CONFIG = deepFreeze({
  HOME: process.env.NEXT_PUBLIC_HOME,
  FICL_API_BASE_URL: process.env.NEXT_PUBLIC_FICL_API_BASE_URL,
  ENV: process.env.NODE_ENV,
  API_KEYS: {
    KAKAO: process.env.NEXT_PUBLIC_KAKAO_LOGIN_API_KEY,
    NAVER: process.env.NEXT_PUBLIC_NAVER_LOGIN_API_KEY,
  },
  REDIRECT: {
    SOCIAL_LOGIN: process.env.NEXT_PUBLIC_SOCIAL_REDIRECT_URL,
  },
});
