import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const rocketsList = await response.json();
    // const rocketsList = data.map((rocket) => ({ ...rocket, reserved: false }));
    return rocketsList;
  },
);

const initialState = [];

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    // rocketReserve: (state, action) => {
    //   console.log('payload: ', action.payload);
    //   console.log('state:', state.rockets);
    //   if ()
    // },
    rocketReserve: (state, action) => state.map((rocket) => {
      if (rocket.rocket_id !== action.payload.rocket.rocket_id) {
        return rocket;
      }
      return { ...rocket, reserved: !rocket.reserved };
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
