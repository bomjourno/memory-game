import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardMedia, Container, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {
  closeFoundedCards,
  setIsGameWon,
  showCard,
  shuffleCards,
} from '../store/reducers/gameSlice';
import { ICards } from '../utils/types';
import { ONE_SECOND_IN_MILLISECONDS } from '../utils/constants';
import unknown from '../images/question-mark.png';

export const CardsList = () => {
  const [selectedCards, setSelectedCards] = useState<ICards[]>([]);
  const { initialData, gameInProcess } = useAppSelector((state) => state.gameReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(shuffleCards());
  }, []);

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (selectedCards[0].alt === selectedCards[1].alt) {
        dispatch(closeFoundedCards(selectedCards[0].alt));
        setSelectedCards([]);
      }
    }
  }, [setSelectedCards, selectedCards]);

  useEffect(() => {
    if (initialData.every((card) => card.canChoose === false)) {
      dispatch(setIsGameWon(true));
    }
  }, [initialData]);

  const handleCardClick = (card: ICards) => {
    dispatch(showCard(card.id));
    setSelectedCards((prevVal) => (prevVal ? [...prevVal, card] : [card]));
    setTimeout(() => {
      dispatch(showCard(card.id));
      setSelectedCards([]);
    }, ONE_SECOND_IN_MILLISECONDS);
  };

  return (
    <Container maxWidth='sm'>
      <Grid
        container
        sx={{ mt: 1, mb: 2 }}
        rowSpacing={4}
        columnSpacing={6}
        justifyContent='center'
      >
        {initialData.map((card) => (
          <Grid item key={card.id}>
            <Card
              sx={{
                width: 100,
                height: 110,
              }}
            >
              <CardActionArea
                sx={{
                  width: '100%',
                  height: '100%',
                  pointerEvents:
                    gameInProcess && !card.front && card.canChoose && selectedCards.length != 2
                      ? 'all'
                      : 'none',
                }}
                onClick={() => handleCardClick(card)}
              >
                <CardMedia
                  component='img'
                  height='70'
                  image={card.front || !card.canChoose ? card.src : unknown}
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
