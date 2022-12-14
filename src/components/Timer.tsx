import React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import { useStopwatch } from '../hooks/useStopwatch';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setGameProcess, setIsGameWon, shuffleCards } from '../store/reducers/gameSlice';
import { ScoreBoard } from './ScoreBoard';
import { useEffect } from 'react';

export const Timer = () => {
  const [time, handleChangeTime] = useStopwatch();
  const { isGameWon, gameInProcess } = useAppSelector((state) => state.gameReducer);
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
    dispatch(setIsGameWon(false));
  };

  const hours: string = ('0' + (Math.floor(time / 3600) % 60)).slice(-2);
  const minutes = ('0' + (Math.floor(time / 60) % 60)).slice(-2);
  const seconds = ('0' + Math.floor(time % 60)).slice(-2);

  useEffect(() => {
    if (isGameWon) {
      handlePauseClick();
    }
  }, [isGameWon]);

  return (
    <Container
      maxWidth='sm'
      sx={[
        {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
          mt: '20px',
        },
        (theme) => ({
          flexDirection: 'column-reverse',
          rowGap: 2,
          [theme.breakpoints.up(638)]: {
            flexDirection: 'row-reverse',
          },
        }),
      ]}
    >
      <Typography
        variant='h5'
        color='#000'
        sx={[
          {
            fontWeight: 200,
            letterSpacing: 2,
            p: '1px 6px',
            border: '1px solid #000',
            borderRadius: '4px',
          },
          (theme) => ({
            fontSize: '20px',
            [theme.breakpoints.up(440)]: {
              fontSize: '24px',
            },
          }),
        ]}
      >
        {hours}:{minutes}:{seconds}
      </Typography>
      <Stack direction='row' spacing={1}>
        <Button
          onClick={handleStartClick}
          variant='outlined'
          color='inherit'
          disabled={isGameWon || gameInProcess}
          sx={(theme) => ({
            fontSize: '12px',
            [theme.breakpoints.up(440)]: {
              fontSize: '14px',
            },
          })}
        >
          Start
        </Button>
        <Button
          onClick={handlePauseClick}
          variant='outlined'
          color='inherit'
          disabled={isGameWon || !gameInProcess}
          sx={(theme) => ({
            fontSize: '12px',
            [theme.breakpoints.up(440)]: {
              fontSize: '14px',
            },
          })}
        >
          Pause
        </Button>
        <Button
          onClick={handleStopClick}
          variant='outlined'
          color='inherit'
          disabled={isGameWon || !gameInProcess}
          sx={(theme) => ({
            fontSize: '12px',
            [theme.breakpoints.up(440)]: {
              fontSize: '14px',
            },
          })}
        >
          Stop
        </Button>
        <ScoreBoard handleStopClick={handleStopClick} time={time} isGameWon={isGameWon} />
      </Stack>
    </Container>
  );
};
