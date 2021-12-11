import React from 'react';

import { BoxProps } from '@chakra-ui/layout';

import SignUpFormPresenter from './SignUpForm.presenter';
import { useSignUpForm } from './SignUpForm.schema';

import { useSignUpMutation } from 'apis/auth/mutate-hooks';
import { useRootContext } from 'context/root';

interface SignUpProps extends BoxProps {}

const SignUpForm = ({ ...styleProps }: SignUpProps) => {
  const {
    handler: { openToast },
  } = useRootContext();

  const formData = useSignUpForm();
  const { handleSubmit } = formData;

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

  const onSubmit = handleSubmit(({ username, email, password }) => {
    signUpMutate({
      username,
      email,
      password,
    });
  });

  return (
    <SignUpFormPresenter
      formData={formData}
      onSubmit={onSubmit}
      {...styleProps}
    />
  );
};

export default SignUpForm;
