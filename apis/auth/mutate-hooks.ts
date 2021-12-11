import { signUp } from '.';
import { useMutation } from 'react-query';

import { MutationHookParams } from 'apis/type';

export const useSignUpMutation = (
  params?: MutationHookParams<typeof signUp>,
) => {
  return useMutation(signUp, params?.options);
};
