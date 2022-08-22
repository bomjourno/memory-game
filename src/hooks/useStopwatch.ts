import React, { useCallback, useState } from 'react';
import { ONE_SECOND_IN_MILLISECONDS } from '../utils/constants';

export const useStopwatch = (): [number, (state: string) => void] => {
  const [time, setTime] = useState<number>(0);
  let timerID: NodeJS.Timer;

  const handleChangeTime = useCallback((state: string) => {
    switch (state) {
      case 'start':
        timerID = setInterval(() => {
          setTime((prevVal) => prevVal + 1);
        }, ONE_SECOND_IN_MILLISECONDS);
        break;
      case 'pause':
        clearInterval(timerID);
        break;
      case 'stop':
        clearInterval(timerID);
        setTime(0);
        break;
      default:
        setTime(0);
    }
  }, []);

  return [time, handleChangeTime];
};
