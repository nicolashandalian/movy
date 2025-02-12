import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'services/store/store';

export const plansSlice = createSlice({
	name: 'selectedPlanId',
	initialState: 1 as number,
	reducers: {
		setSelectedPlanId(_, action: PayloadAction<number>) {
			return action.payload;
		},
	},
});

export const plansActions = plansSlice.actions;

export const selectPlans = createSelector(
	(state: RootState) => state,
	(state) => state ?? null,
);

export default plansSlice.reducer;
