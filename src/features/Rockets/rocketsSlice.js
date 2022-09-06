import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const rocketsList = await response.json();
    return rocketsList;
  },
);

const initialState = [];

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketReserve: (state, action) => state.map((rocket) => {
      if (rocket.rocket_id === action.payload) {
        return { ...rocket, reserved: !rocket.reserved };
      }
      return rocket;
    }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, () => {
        console.log('loading');
      })
      .addCase(getRockets.fulfilled, (state, action) => action.payload);
  },
});

// Action creators are generated for each case reducer function
export const { rocketReserve, rocketUndoReserve } = rocketsSlice.actions;

export default rocketsSlice.reducer;
