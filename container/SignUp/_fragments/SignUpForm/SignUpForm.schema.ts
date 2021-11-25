import * as yup from 'yup';
import { ERROR_MESSAGE } from 'constants/error-message';
import { useForm, UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export type SignUpFormType = {
  username: string;
  email: string;
  phone: string;
  code: string;
};

export const signUpFormSchema = yup.object().shape({
  username: yup.string().required(ERROR_MESSAGE.FORM.REQUIRED),
  email: yup
    .string()
    .required(ERROR_MESSAGE.FORM.REQUIRED)
    .email(ERROR_MESSAGE.FORM.EMAIL),
  phone: yup
    .string()
    .required(ERROR_MESSAGE.FORM.REQUIRED)
    .test(
      'isNumber',
      ERROR_MESSAGE.FORM.TYPE_NUMBER,
      (val) => !Number.isNaN(Number(val)),
    )
    .min(8, ERROR_MESSAGE.FORM.MIN_LENGTH(8))
    .max(11, ERROR_MESSAGE.FORM.MAX_LENGTH(11)),
  code: yup
    .string()
    .required(ERROR_MESSAGE.FORM.REQUIRED)
    .test(
      'isNumber',
      ERROR_MESSAGE.FORM.TYPE_NUMBER,
      (val) => !Number.isNaN(Number(val)),
    )
    .length(6, ERROR_MESSAGE.FORM.MIN_LENGTH(6)),
});

export const useSignUpForm = (options?: UseFormProps<SignUpFormType>) => {
  return useForm<SignUpFormType>({
    resolver: yupResolver(signUpFormSchema),
    mode: 'onChange',
    ...options,
  });
};
