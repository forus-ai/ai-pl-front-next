import React from 'react';

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  HelpTextProps,
} from '@chakra-ui/form-control';

interface FormHelperProps extends FormControlProps {
  helperText?: string | JSX.Element;
  errorText?: string | JSX.Element;
  successText?: string | JSX.Element;
  label?: string;
  children: JSX.Element | JSX.Element[];

  labelProps?: FormLabelProps;
  successTextProps?: HelpTextProps;
  helperTextProps?: HelpTextProps;
  errorTextProps?: FormErrorMessageProps;
}

const FormHelper = ({
  //
  helperText,
  errorText,
  successText,
  children,
  label,

  labelProps,
  successTextProps,
  helperTextProps,
  errorTextProps,

  ...basisProps
}: FormHelperProps) => {
  return (
    <FormControl isInvalid={!!errorText} {...basisProps}>
      {!!label && (
        <FormLabel //
          mb="10px"
          fontSize="14px"
          {...labelProps}
        >
          {label}
        </FormLabel>
      )}
      {children}
      {!!errorText && !successText && (
        <FormErrorMessage {...errorTextProps}>{errorText}</FormErrorMessage>
      )}
      {!!successText && !errorText && (
        <FormHelperText color="custom.primary" {...successTextProps}>
          {successText}
        </FormHelperText>
      )}
      {!!helperText && !errorText && !successText && (
        <FormHelperText {...helperTextProps}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default FormHelper;
