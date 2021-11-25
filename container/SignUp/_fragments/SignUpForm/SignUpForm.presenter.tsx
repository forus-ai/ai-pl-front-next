import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Input } from '@chakra-ui/input';
import { Box, BoxProps, Flex } from '@chakra-ui/layout';
import { Button, Fade } from '@chakra-ui/react';

import FormHelper from 'components/common/FormHelper';
import Timer, { TimerProps } from 'components/common/Timer';
import { SignUpFormType } from './SignUpForm.schema';

interface SignUpPresenterProps extends BoxProps {
  formData: UseFormReturn<SignUpFormType>;
  timerStatus: TimerProps['status'];
  isPhoneConfirm: boolean;
  verifyPhoneConfirmMutateLoading: boolean;
  onClickSendPhoneVerify: () => void;
  onTimeOverPhoneVerify: () => void;
  onClickVerifyPhoneConfirm: () => void;
  onClickReSendVerifyPhone: () => void;
}
const SUBMIT_BUTTON_HEIGHT = '68px';

const SignUpFormPresenter = ({
  //
  formData: {
    register,
    formState: { isValid: isValidFormState, errors },
  },
  timerStatus,
  isPhoneConfirm,
  verifyPhoneConfirmMutateLoading,
  onSubmit,
  onTimeOverPhoneVerify,
  onClickSendPhoneVerify,
  onClickVerifyPhoneConfirm,
  onClickReSendVerifyPhone,

  minH = '100%', //Basis Defaults
  pb = SUBMIT_BUTTON_HEIGHT,
  ...basisProps
}: SignUpPresenterProps) => {
  const isCanSubmit = isValidFormState && isPhoneConfirm;

  return (
    <Box //
      as="form"
      minH={minH}
      pb={pb}
      onSubmit={onSubmit}
      {...basisProps}
    >
      <FormHelper mb="40px" label="이름" errorText={errors.username?.message}>
        <Input //
          {...register('username', { required: true })}
          autoComplete="off"
        />
      </FormHelper>
      <FormHelper mb="40px" label="이메일" errorText={errors.email?.message}>
        <Input //
          {...register('email', { required: true })}
          autoComplete="off"
        />
      </FormHelper>

      <FormHelper mb="40px" label="전화번호" errorText={errors.phone?.message}>
        <Flex align="center" h="52px">
          <Input //
            flexGrow={1}
            {...register('phone', {
              required: true,
            })}
            disabled={isPhoneConfirm}
            autoComplete="off"
          />
          <Button //
            isLoading={timerStatus === 'play'}
            w="100px"
            h="100%"
            bg="custom.primary"
            color="custom.white"
            onClick={onClickSendPhoneVerify}
            disabled={
              !!errors.phone || timerStatus === 'play' || isPhoneConfirm
            }
          >
            전송
          </Button>
        </Flex>
      </FormHelper>

      <Fade in={timerStatus === 'play' || isPhoneConfirm}>
        <FormHelper mb="40px" label="인증번호" errorText={errors.code?.message}>
          <Flex align="center" h="52px">
            <Input //
              pr="100px"
              flexGrow={1}
              {...register('code', {
                required: true,
              })}
              disabled={isPhoneConfirm}
              autoComplete="off"
            />
            <Timer
              position="absolute"
              value={5}
              format="m"
              right="100px"
              status={timerStatus}
              onComplete={onTimeOverPhoneVerify}
            />

            <Button //
              w="100px"
              h="100%"
              isLoading={verifyPhoneConfirmMutateLoading}
              onClick={onClickVerifyPhoneConfirm}
              disabled={!!errors.code || isPhoneConfirm}
            >
              인증
            </Button>
            <Button //
              variant="unstyled"
              w="fit-content"
              h="fit-content"
              textDecoration="underline"
              position="absolute"
              top="0px"
              left="70px"
              py="0"
              color="custom.primary"
              onClick={onClickReSendVerifyPhone}
            >
              재전송
            </Button>
          </Flex>
        </FormHelper>
      </Fade>

      <Button //
        w={{
          sm: '100%',
          md: '440px',
          lg: '640px',
        }}
        type="submit"
        position="fixed"
        right="0"
        bottom="0"
        height={SUBMIT_BUTTON_HEIGHT}
        disabled={!isCanSubmit}
      >
        로그인 / 회원가입
      </Button>
    </Box>
  );
};

export default SignUpFormPresenter;
