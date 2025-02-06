import { configureStore } from '@reduxjs/toolkit';
import { sessionSlice } from 'features/session/slice';

export const createTestStore = (initialState: object) => {
	return configureStore({
		reducer: {
			session: sessionSlice.reducer,
		},
		middleware(getDefaultMiddleware) {
			return getDefaultMiddleware().concat([]);
		},
		preloadedState: initialState,
	});
};
