import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsSlice from '../features/Rockets/rocketsSlice';

export const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
