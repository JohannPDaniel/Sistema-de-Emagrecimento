import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface WeightEntry {
	date: string;
	weight: number;
}

export interface UserProfile {
	height: number;
	age: number;
	gender: 'male' | 'female' | 'other';
	goal: number;
}

interface HealthDataState {
	profile: UserProfile | null;
	weightEntries: WeightEntry[];
}

const initialState: HealthDataState = {
	profile: null,
	weightEntries: [],
};

const healthDataSlice = createSlice({
	name: 'healthData',
	initialState,
	reducers: {
		setProfile: (state, action: PayloadAction<UserProfile>) => {
			state.profile = action.payload;
		},
		addWeightEntry: (state, action: PayloadAction<WeightEntry>) => {
			state.weightEntries.push(action.payload);
			// Sort entries by date
			state.weightEntries.sort(
				(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
			);
		},
		updateWeightEntry: (
			state,
			action: PayloadAction<{ date: string; weight: number }>
		) => {
			const { date, weight } = action.payload;
			const entryIndex = state.weightEntries.findIndex(
				(entry) => entry.date === date
			);
			if (entryIndex !== -1) {
				state.weightEntries[entryIndex].weight = weight;
			}
		},
		deleteWeightEntry: (state, action: PayloadAction<string>) => {
			state.weightEntries = state.weightEntries.filter(
				(entry) => entry.date !== action.payload
			);
		},
	},
});

export const {
	setProfile,
	addWeightEntry,
	updateWeightEntry,
	deleteWeightEntry,
} = healthDataSlice.actions;
export const healthDataReducer = healthDataSlice.reducer;
