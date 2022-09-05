import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    // change the line below for our reducers
    // counter: counterReducer,
  },
});
