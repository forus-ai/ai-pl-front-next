import { breakpoints } from 'styles/theme/foundations/breakpoints';

export type RootState = {
  deviceSize: keyof typeof breakpoints | '';

  isMobile: boolean;
  isTablet: boolean;
  isPc: boolean;
};

export const rootState: RootState = {
  deviceSize: '',

  isMobile: false,
  isTablet: false,
  isPc: false,
};
