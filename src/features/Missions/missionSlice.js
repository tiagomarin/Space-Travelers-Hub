import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMissions = createAsyncThunk(
	"missions/getMissions",
 async () => {
	const response = await fetch("https://api.spacexdata.com/v3/missions");
	const missionList= await response.json();
	return missionList;
	  }
);

const intialState =[];

const missionSlice = createSlice({
	name: "missions",
	initialState: intialState,
	reducers: {
		joinMission: (state) => state
	},
	extraReducers: (builder) => {
	builder
		.addCase(getMissions.fulfilled, (state, action) => {
			return action.payload;
		},
		);
	},
});

export const { joinMission } = missionSlice.actions;

export default missionSlice.reducer;
