import React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import { useStopwatch } from '../hooks/useStopwatch';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setGameProcess, shuffleCards } from '../store/reducers/gameSlice';
import { ScoreBoard } from './ScoreBoard';
import { useEffect } from 'react';

export const Timer = () => {
  const [time, handleChangeTime] = useStopwatch();
  const { isGameWon } = useAppSelector((state) => state.gameReducer);
  const dispatch = useAppDispatch();

  const handleStartClick = () => {
    handleChangeTime('start');
    dispatch(setGameProcess(true));
  };

  const handlePauseClick = () => {
    handleChangeTime('pause');
    dispatch(setGameProcess(false));
  };

  const handleStopClick = () => {
    handleChangeTime('stop');
    dispatch(shuffleCards());
    dispatch(setGameProcess(false));
  };

  const hours: string = ('0' + (Math.floor(time / 3600) % 60)).slice(-2);
  const minutes = ('0' + (Math.floor(time / 60) % 60)).slice(-2);
  const seconds = ('0' + Math.floor(time % 60)).slice(-2);

  useEffect(() => {
    if (isGameWon) {
      handleStopClick();
    }
  }, [isGameWon]);

  return (
    <Container
      maxWidth='sm'
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        mt: '20px',
      }}
    >
      <Typography
        variant='h5'
        color='#000'
        sx={{
          fontWeight: 200,
          letterSpacing: 2,
          p: '1px 6px',
          border: '1px solid #000',
          borderRadius: '4px',
        }}
      >
        {hours}:{minutes}:{seconds}
      </Typography>
      <Stack direction='row' spacing={1}>
        <Button onClick={handleStartClick} variant='outlined' color='inherit'>
          Start
        </Button>
        <Button onClick={handlePauseClick} variant='outlined' color='inherit'>
          Pause
        </Button>
        <Button onClick={handleStopClick} variant='outlined' color='inherit'>
          Stop
        </Button>
        <ScoreBoard time={time} isGameWon={isGameWon} />
      </Stack>
    </Container>
  );
};
