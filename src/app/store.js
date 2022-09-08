import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionReducer from '../features/Missions/missionSlice';
import rocketsSlice from '../features/Rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
