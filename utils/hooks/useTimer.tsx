import dayjs from 'dayjs';
import React from 'react';

interface Args {
  format?: 's' | 'm';
  value: number;
  onComplete?: () => void;
}

const s = 1000; //ms
const m = 60 * s;

const useTimer = ({ format = 's', value, onComplete }: Args) => {
  console.log('render');
  const getInitialValue = React.useCallback(() => {
    const isSecond = format === 's';
    const isMinute = format === 'm';
    const maxValue = isMinute ? 60 : 60 * 60;
    const valueInRange = Math.min(maxValue, value);
    if (isSecond) return valueInRange * s;
    if (isMinute) return valueInRange * m;
    return valueInRange; //ms
  }, [format, value]);

  const initialValue = React.useMemo(
    () => getInitialValue(),
    [getInitialValue],
  );

  const [timer, setTimer] = React.useState(initialValue);
  const [status, setStatus] = React.useState<'play' | 'stop' | 'paused'>(
    'stop',
  );

  const playTimer = () => {
    if (status === 'play') return;
    if (status === 'stop') setTimer(initialValue);
    setStatus('play');
  };
  const stopTimer = () => {
    setTimer(0);
    setStatus('stop');
  };

  const pauseTimer = () => {
    setStatus('paused');
  };

  // For: handle timer
  React.useEffect(() => {
    const isTimeOver = timer <= 0;
    const isPlay = status === 'play';

    const interval = setInterval(() => {
      if (isPlay === false) {
        console.log('not plxc');
        clearInterval(interval);
        return;
      }
      if (isTimeOver) {
        console.log('time over');

        clearInterval(interval);
        setStatus('stop');
        if (onComplete) onComplete();
        return;
      }
      setTimer((cur) => cur - s);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete, timer, status]);

  return {
    timer: dayjs(timer).format('mm:ss'),
    isTimeOver: timer <= 0,
    playTimer,
    stopTimer,
    pauseTimer,
  };
};

export default useTimer;
