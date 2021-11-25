export type Color = {
  primary: string;
  secondary: string;
  tertiary: string;
  'primary.sub': string;
  'secondary.sub': string;
  'tertiary.sub': string;
  point: string;
  'point.sub': string;
  warning: string;
  'warning.sub': string;
  success: string;
  'success.sub': string;
  black: string;
  white: string;
  gray: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  modal: string;
};

export const Light: Color = {
  primary: '#08BAED',
  secondary: '#404152',
  tertiary: '#0C1F6F',
  'primary.sub': '#D6F6FF',
  'secondary.sub': '#F3F6FC',
  'tertiary.sub': '#6F85E3',
  point: '#0CAB7C',
  'point.sub': '#FFCAB2',
  warning: '#FF6060',
  'warning.sub': '#FFE2E2',
  success: '#08BAED',
  'success.sub': '#D6F6FF',
  black: '#404152',
  white: '#FFFFFF',
  gray: {
    0: '#FAFAFA',
    1: '#F3F3F3',
    2: '#DFDFDF',
    3: '#CCCCCC',
    4: '#808080',
    5: '#444444',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F0F0F0',
  },
  modal: '#FFFFFF',
};

const colors = {
  custom: { ...Light },
};

export default colors;
