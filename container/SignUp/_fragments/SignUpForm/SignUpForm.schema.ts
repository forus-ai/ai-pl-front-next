import { UseFormProps, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { ERROR_MESSAGE } from 'constants/error-message';

export type SignUpFormType = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export const signUpFormSchema = yup.object().shape({
  username: yup.string().required(ERROR_MESSAGE.FORM.REQUIRED),
  email: yup
    .string()
    .required(ERROR_MESSAGE.FORM.REQUIRED)
    .email(ERROR_MESSAGE.FORM.EMAIL),
  password: yup.string().required(ERROR_MESSAGE.FORM.REQUIRED),
  passwordConfirm: yup.string().required(ERROR_MESSAGE.FORM.REQUIRED),
});

export const useSignUpForm = (options?: UseFormProps<SignUpFormType>) => {
  return useForm<SignUpFormType>({
    resolver: yupResolver(signUpFormSchema),
    mode: 'onChange',
    ...options,
  });
};
