const baseStyle = {
  h: 'fit-content',
  borderColor: 'custom.gray.3',
  _focus: {
    outline: 'none',
    boxShadow: 'none',
    borderColor: 'custom.primary',
  },
};

const Input = {
  sizes: {
    sm: {
      field: {
        fontSize: { sm: '12px', md: '10px', lg: '12px' },
        lineHeight: { sm: '12px', md: '10px', lg: '12px' },
      },
    },
    md: {
      field: {
        fontSize: { sm: '16px', md: '14px', lg: '15px' },
        lineHeight: { sm: '16px', md: '14px', lg: '15px' },
      },
    },
    lg: {
      field: {
        fontSize: { sm: '20px', md: '20px', lg: '26px' },
        lineHeight: { sm: '20px', md: '20px', lg: '26px' },
      },
    },
    xl: {
      field: {
        fontSize: { sm: '26px', md: '35px', lg: '35px' },
        lineHeight: { sm: '26px', md: '35px', lg: '35px' },
      },
    },
  },
  variants: {
    outline: {
      field: {
        ...baseStyle,
        px: '10px',
        py: '15px',
        borderWidth: '1px',
        borderRadius: '5px',
      },
    },
    flushed: {
      field: {
        ...baseStyle,
        h: 'fit-content',
        pb: '5px',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};

export default Input;
