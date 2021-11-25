import deepFreeze from 'utils/deepFreeze';

export const ERROR_MESSAGE = deepFreeze({
  STATUS_CODE: {
    400: '잘못된 요청 입니다.',
    401: '로그인이 필요합니다.',
    403: '해당 권한이 없습니다.',
    404: '요청한 데이터를 찾을수 없습니다.',
    444: '토큰이 만료되었습니다.',
    500: '서버에 문제가 있습니다.',
  },
  FORM: {
    EMAIL: '올바르지 않은 이메일 입니다.',
    REQUIRED: '해당 항목은 필수값 입니다.',
    TYPE_NUMBER: '숫자만 입력 가능합니다.',
    LENGTH: (length: number) => `${length}자만 입력 가능합니다.`,
    MAX_LENGTH: (maxLength?: number) =>
      maxLength
        ? `최대 길이는 ${maxLength}자 입니다.`
        : '최대길이를 초과했습니다.',
    MIN_LENGTH: (minLength?: number) =>
      minLength
        ? `최소 길이는 ${minLength}자 입니다.`
        : '최소길이를 넘지 못했습니다.',
  },
});
