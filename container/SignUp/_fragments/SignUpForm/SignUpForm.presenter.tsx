import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Input } from '@chakra-ui/input';
import { Box, BoxProps } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';

import FormHelper from 'components/common/FormHelper';
import LinkButton from 'components/common/LinkButton';

import { SignUpFormType } from './SignUpForm.schema';

interface SignUpPresenterProps extends BoxProps {
  formData: UseFormReturn<SignUpFormType>;
}

const SignUpFormPresenter = ({
  //
  formData: {
    register,
    formState: { isValid: isValidFormState, errors },
  },
  onSubmit,
  ...basisProps
}: SignUpPresenterProps) => {
  const isCanSubmit = isValidFormState;

  return (
    <Box //
      as="form"
      minH="100%"
      onSubmit={onSubmit}
      {...basisProps}
    >
      <FormHelper mb="40px" label="이름" errorText={errors.username?.message}>
        <Input
          placeholder="이름을 입력해주세요"
          autoComplete="off"
          {...register('username')}
        />
      </FormHelper>
      <FormHelper
        mb="40px"
        label="이메일(아이디)"
        errorText={errors.email?.message}
      >
        <Input
          placeholder="이메일주소를 입력해주세요"
          autoComplete="off"
          {...register('email')}
        />
      </FormHelper>
      <FormHelper mb="40px" label="비밀번호" errorText={errors.email?.message}>
        <Input
          placeholder="비밀번호를 입력해주세요"
          autoComplete="off"
          {...register('password')}
        />
      </FormHelper>
      <FormHelper
        mb="73px"
        label="비밀번호 확인"
        errorText={errors.email?.message}
      >
        <Input
          placeholder="비밀번호를 입력해주세요"
          autoComplete="off"
          {...register('passwordConfirm')}
        />
      </FormHelper>

      <Button //
        py="17px"
        type="submit"
        mb="40px"
        disabled={!isCanSubmit}
      >
        회원가입
      </Button>
      <LinkButton href="#" variant="link">
        이미 계정이 있습니다.
      </LinkButton>
    </Box>
  );
};

export default SignUpFormPresenter;
