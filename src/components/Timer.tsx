import React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import { useStopwatch } from '../hooks/useStopwatch';
import { useAppDispatch } from '../hooks/redux';
import { setGameProcess, shuffleCards } from '../store/reducers/gameSlice';

export const Timer = () => {
  const [time, handleChangeTime] = useStopwatch();
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

  return (
    <Container
      maxWidth='sm'
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Typography variant='h5' color='#000' sx={{ fontWeight: 200 }}>
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
      </Stack>
    </Container>
  );
};
