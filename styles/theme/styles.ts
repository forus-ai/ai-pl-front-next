/* eslint-disable @typescript-eslint/no-explicit-any */
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({
    body: {
      fontFamily: 'Noto Sans KR, sans-serif',
      color: mode('#1A1A1A', '#FFFFFF')(props),
      bg: mode('#FFFFFF', '#363636')(props),
    },
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    '.slick-slide': {
      display: 'flex !important',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  }),
};

export default styles;
