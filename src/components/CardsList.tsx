import React from 'react';
import { Card, CardActionArea, CardMedia, Container, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import unknown from '../images/question-mark.png';
import { showCard, shuffleCards } from '../store/reducers/gameSlice';
import { useEffect } from 'react';

export const CardsList = () => {
  const { initialData } = useAppSelector((state) => state.gameReducer);
  const { gameInProcess } = useAppSelector((state) => state.gameReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(shuffleCards());
  }, []);

  return (
    <Container maxWidth='sm'>
      <Grid
        container
        sx={{ mt: 1, mb: 2 }}
        rowSpacing={3}
        columnSpacing={5}
        justifyContent='center'
      >
        {initialData.map((card) => (
          <Grid item key={card.id}>
            <Card sx={{ width: 100, height: 110 }}>
              <CardActionArea
                sx={{
                  width: '100%',
                  height: '100%',
                  pointerEvents: gameInProcess ? 'all' : 'none',
                }}
                onClick={() => dispatch(showCard(card.id))}
              >
                <CardMedia
                  component='img'
                  height='70'
                  image={card.front ? card.src : unknown}
                  sx={{ objectFit: 'contain' }}
                  alt={card.alt}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
