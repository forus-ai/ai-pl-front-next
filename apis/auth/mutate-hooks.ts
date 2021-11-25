import { MutationHookParams } from 'apis/type';
import { useMutation } from 'react-query';
import { signUp, verifyPhone, verifyPhoneConfirm } from '.';

export const useSignUpMutation = (
  params?: MutationHookParams<typeof signUp>,
) => {
  return useMutation(signUp, params?.options);
};

export const useVerifyPhoneMutation = (
  params?: MutationHookParams<typeof verifyPhone>,
) => {
  return useMutation(verifyPhone, params?.options);
};

export const useVerifyPhoneConfirmMutation = (
  params?: MutationHookParams<typeof verifyPhoneConfirm>,
) => {
  return useMutation(verifyPhoneConfirm, params?.options);
};
