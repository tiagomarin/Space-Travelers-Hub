import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionReducer from '../features/Missions/missionSlice';


export const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
