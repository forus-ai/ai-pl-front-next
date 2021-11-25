import { ComponentSingleStyleConfig } from '@chakra-ui/react';
import textStyles from '../textStyles';

const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    borderRadius: '0px',
    fontWeight: 'bold',
    _disabled: {
      opacity: 1,
    },
  },
  sizes: {
    ...textStyles,
  },
  defaultProps: {
    size: 'md',
    color: 'custom.primary',
  },
  variants: {
    solid: (props) => ({
      //
      ...commonCSS,
      ...commonActionEffect,
      color: 'custom.white',
      bg: 'custom.primary',
      _disabled: {
        bg: 'custom.gray.3',
      },
      _active: {
        ...commonActionEffect._active,
        bg: props.bg || props.backgroundColor || 'custom.primary',
      },
      _hover: {
        ...commonActionEffect._hover,
        bg: props.bg || props.backgroundColor || 'custom.primary',
        _disabled: {
          bg: 'custom.gray.3',
        },
      },
    }),
    outline: (props) => ({
      ...commonCSS,
      ...commonActionEffect,
      color: 'custom.primary',
      bg: 'transparent',
      borderWidth: '1px',
      borderColor: props.color,
      _disabled: {
        color: 'custom.gray.3',
        borderColor: 'custom.gray.3',
      },
      _active: {
        ...commonActionEffect._active,
        bg: 'transparent',
      },
      _hover: {
        ...commonActionEffect._hover,
        bg: 'transparent',
      },
    }),
    unstyled: () => ({ ...commonCSS, ...commonActionEffect }),
    ghost: {},
    link: {},
  },
};

export default Button;

const commonCSS = {
  w: '100%',
  h: 'fit-content',
  py: '16px',
};

const commonActionEffect = {
  _active: {
    transition: '0.1s ease-out',
    transform: 'translateY(1px)',
  },
  _hover: {
    transition: '0.1s ease-out',
    filter: 'grayscale(0.2)',
  },
  _focus: {
    boxShadow: 'none',
  },
};
