import { createSlice } from '@reduxjs/toolkit';
import { initialData } from '../../utils/cardsData';
import { shuffle } from '../../utils/functions';

const initialState = {
  initialData,
  gameInProcess: false,
  isGameWon: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    showCard(state, action) {
      state.initialData.find((card) => {
        if (card.id === action.payload) {
          card.front = !card.front;
        }
      });
    },
    shuffleCards(state) {
      shuffle(state.initialData);
      state.initialData.forEach((card) => {
        card.front = false;
      });
    },
    setGameProcess(state, action) {
      state.gameInProcess = action.payload;
    },
  },
});

export const { showCard, shuffleCards, setGameProcess } = gameSlice.actions;

export default gameSlice.reducer;
