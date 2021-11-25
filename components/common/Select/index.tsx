import { Select as ChakraSelect, SelectProps } from '@chakra-ui/react';

export const MySelect = ({ children, ...selectProps }: SelectProps) => {
  return (
    <ChakraSelect
      {...selectProps}
      sx={{
        '&': {
          color: selectProps.value === '' ? 'gray.300' : 'current',
        },
        'select option': { color: '#FFFFFF', border: '1px solid #1a1a1a' }, // placeholder *option* should be subtle (firefox)
        "& :not(option[value=''])": { color: '#4050ad' }, // all other *options* should be default text color
      }}
    >
      {children}
    </ChakraSelect>
  );
};
