import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    const rocketsList = data.map((rocket) => ({ ...rocket, reserved: false })
    )
    return rocketsList;
  }
);

const initialState = [];

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketReserve: (state, action) => {
      console.log("action payload: ", action.payload);
      if (action.payload.reserved === false) {
        return action.payload.reserved = true;
      } else {
        return action.payload.reserved = false;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, () => {
        console.log('loading');
      })
      .addCase(getRockets.fulfilled, (state, action) => action.payload)
  }
});

// Action creators are generated for each case reducer function
export const { rocketReserve, rocketUndoReserve } = rocketsSlice.actions;

export default rocketsSlice.reducer;