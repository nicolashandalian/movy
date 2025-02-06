import React from 'react';
import { Provider } from 'react-redux';
import { createTestStore } from '../customMocks/redux/createTestStore';

const withProviders = (
	component: React.ReactNode,
	initialState = {},
): React.JSX.Element => {
	const store = createTestStore(initialState);
	return <Provider store={store}>{component}</Provider>;
};

export default withProviders;
