import { list } from "tar";

//ACTION
const GETMISSION = './features/Missions/GETMISSION';
const JOINMISSION = './features/Missions/JOINMISSION';
const LEAVEMISSION = './features/Missions/LEAVEMISSION';

//REDUCER
const missionsReducer = (state = [], action) => {
	switch (action.type) {
		case GETMISSION:
			return  [...action.payload]	;
		case JOINMISSION:
			return state.map((item) => (
				item.id === action.payload.id ? { ...item, joined: true } : item
			));
		case LEAVEMISSION:
			return state.map((item) => (
				item.id === action.payload.id ? { ...item, joined: false } : item
			));
		default:
			return state;
	}
};

export default missionsReducer;

//ACTION CREATOR
const getMission = (missions) => ({
	type: GETMISSION,
	missions,
});

export const joinMission = (id) => ({
	type: JOINMISSION,
	payload: id,
});

export const leaveMission = (id) => ({
	type: LEAVEMISSION,
	payload: id,
});

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMission = () => async (dispatch) => {
	fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			accept: 'application/json',
		},
	})
		.then((res) => res.json())
		.then((result) => {
			const data = Object.entries(result);
			data.forEach((element) => {
				list.push ({
					id: element[1].mission_id,
					name: element[1].mission_name,
					description: element[1].description,
					joined: false,
				});
			});
				dispatch(getMission(list));
		});
};
