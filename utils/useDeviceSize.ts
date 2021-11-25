import React from 'react';
import { breakpoints } from 'styles/theme/foundations/breakpoints';
import { throttle } from 'lodash';
type BreakPoints = keyof typeof breakpoints | '';

function useDeviceSize() {
  const [device, setDevice] = React.useState<BreakPoints>('');

  React.useEffect(() => {
    const handleResize = throttle(() => {
      const pcSize = Number(breakpoints.lg.split('px')[0]);
      const tabSize = Number(breakpoints.md.split('px')[0]);

      const offsetWidth = window.innerWidth;
      const isPC = offsetWidth > pcSize;
      const isMobile = offsetWidth < tabSize;
      const isTab = !isPC && !isMobile;

      if (isPC) {
        setDevice('lg');
        return;
      }
      if (isTab) {
        setDevice('md');
        return;
      }
      if (isMobile) {
        setDevice('sm');
        return;
      }
    }, 200);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return device;
}

export default useDeviceSize;
