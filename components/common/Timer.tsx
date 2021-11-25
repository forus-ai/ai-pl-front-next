import React from 'react';
import { Text, TextProps } from '@chakra-ui/layout';
import useTimer from 'utils/hooks/useTimer';

type UseTimerArgs = Parameters<typeof useTimer>[0];
export interface TimerProps extends TextProps, UseTimerArgs {
  status: 'play' | 'stop' | 'pause';
}

const Timer = ({
  //
  format,
  value,
  status,
  onComplete,

  as = 'span', // Basis Default
  color = 'red',
  textStyle = 'md',
  ...basisProps
}: TimerProps) => {
  const { timer, pauseTimer, playTimer, stopTimer } = useTimer({
    format,
    value,
    onComplete: () => {
      if (onComplete) onComplete();
    },
  });

  // For: handle timer
  React.useEffect(() => {
    const isPlay = status === 'play';
    const isStop = status === 'stop';
    const isPause = status === 'pause';
    if (isStop) stopTimer();
    if (isPause) pauseTimer();
    if (isPlay) playTimer();
  }, [pauseTimer, playTimer, status, stopTimer]);

  return (
    <Text //
      as={as}
      color={color}
      textStyle={textStyle}
      {...basisProps}
    >
      {timer}
    </Text>
  );
};

export default React.memo(Timer);
