import { createBreakpoints } from '@chakra-ui/theme-tools';

export const breakpoints = {
  sm: '0px', // base,mobile ≥ 0px
  md: '767px', // tablet ≥ 767px
  lg: '1280px', // pc ≥ 1280px
  xl: '1920px', // lg-pc ≥ 1920px
};

export default createBreakpoints(breakpoints);

// https://github.com/chakra-ui/chakra-ui/issues/3042
