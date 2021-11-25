import React from 'react';
import { BoxProps } from '@chakra-ui/layout';
import { useRouter } from 'next/router';

import { TimerProps } from 'components/common/Timer';
import SignUpFormPresenter from './SignUpForm.presenter';
import { useSignUpForm } from './SignUpForm.schema';

import {
  useSignUpMutation,
  useVerifyPhoneConfirmMutation,
  useVerifyPhoneMutation,
} from 'apis/auth/mutate-hooks';

import { useRootContext } from 'context/root';
import { getToken } from 'utils/localStorage/token';
import { ROUTE } from 'constants/route';

interface SignUpProps extends BoxProps {}

const SignUpForm = ({ ...styleProps }: SignUpProps) => {
  const {
    handler: { openToast },
  } = useRootContext();

  const formData = useSignUpForm();
  const { handleSubmit, setError, trigger, watch, clearErrors } = formData;
  const router = useRouter();

  const [isPhoneConfirm, setIsPhoneConfirm] = React.useState(false);
  const [timerStatus, setTimerStatus] =
    React.useState<TimerProps['status']>('stop');

  const { mutate: signUpMutate } = useSignUpMutation({
    options: {
      onSuccess: () => {
        openToast({
          status: 'success',
          description: '회원가입에 성공했습니다!',
        });
      },
    },
  });

  const { mutate: verifyPhoneMutate } = useVerifyPhoneMutation({
    options: {
      onSuccess: () => {
        openToast({
          status: 'success',
          description: '인증번호가 발송됐습니다.',
        });
      },
      onError: () => {
        setTimerStatus('stop');
        openToast({
          status: 'error',
          description: '인증번호를 발송하지 못했습니다.',
        });
      },
    },
  });
  const {
    mutate: verifyPhoneConfirmMutate,
    isLoading: verifyPhoneConfirmMutateLoading,
  } = useVerifyPhoneConfirmMutation({
    options: {
      onSuccess: () => {
        setTimerStatus('stop');
        setIsPhoneConfirm(true);
        openToast({
          status: 'success',
          description: '핸드폰 번호가 인증 되었습니다.',
        });
      },
      onError: () => {
        setError('code', { message: '잘못된 인증번호입니다.' });
        openToast({
          status: 'error',
          description: '잘못된 인증번호입니다.',
        });
      },
    },
  });

  const onSubmit = handleSubmit(({ username, email, phone, code }) => {
    signUpMutate({
      username,
      email,
      phone,
      code,
    });
  });

  const onClickSendPhoneVerify = () => {
    clearErrors(['code', 'phone']);
    const phone = watch('phone');
    trigger('phone').then((isValid) => {
      if (!isValid) return;
      setTimerStatus('play');
      verifyPhoneMutate({ phone });
    });
  };

  const onTimeOverPhoneVerify = () => {
    setTimerStatus('stop');
    setError('code', {
      message: '시간이 초과되었습니다 재전송버튼을 눌러주세요',
    });
  };

  const onClickReSendVerifyPhone = () => {
    clearErrors(['code', 'phone']);
    setIsPhoneConfirm(false);
    setTimerStatus('stop');
  };

  const onClickVerifyPhoneConfirm = () => {
    const phone = watch('phone');
    const code = watch('code');

    trigger('code').then((isValid) => {
      if (!isValid) return;
      verifyPhoneConfirmMutate({ phone, code });
    });
  };

  // For: validation of access this page
  React.useEffect(() => {
    const { access, isRegister } = getToken();
    const isInvalidAccess = !access;
    const isLogged = access && isRegister;
    if (isInvalidAccess) {
      openToast({
        status: 'warning',
        description: '올바르지 못한 접근입니다.',
      });
      router.replace(ROUTE.LOGIN);
    }
    if (isLogged) {
      openToast({
        status: 'warning',
        description: '로그아웃 후 이용가능합니다.',
      });
      router.replace(ROUTE.DASHBOARD);
    }
  });

  return (
    <SignUpFormPresenter
      formData={formData}
      timerStatus={timerStatus}
      isPhoneConfirm={isPhoneConfirm}
      verifyPhoneConfirmMutateLoading={verifyPhoneConfirmMutateLoading}
      onClickSendPhoneVerify={onClickSendPhoneVerify}
      onTimeOverPhoneVerify={onTimeOverPhoneVerify}
      onClickVerifyPhoneConfirm={onClickVerifyPhoneConfirm}
      onClickReSendVerifyPhone={onClickReSendVerifyPhone}
      onSubmit={onSubmit}
      {...styleProps}
    />
  );
};

export default SignUpForm;
