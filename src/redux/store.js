import { configureStore } from '@reduxjs/toolkit';
import cardDeckSlice from './cardDeckSlice'

export const store = configureStore({
  reducer: {
    cardDeckSlice: cardDeckSlice,
  },
});
