import React, { useState } from 'react';
import PlansDevicesTab from './Tabs/PlansDevicesTab';
import PlansCancelTab from './Tabs/PlansCancelTab';
import PlansPriceTab from './Tabs/PlansPriceTab';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';

const FirstRoute = () => <PlansPriceTab />;
const SecondRoute = () => <PlansCancelTab />;
const ThirdRoute = () => <PlansDevicesTab />;

const renderScene = SceneMap({
	first: FirstRoute,
	second: SecondRoute,
	third: ThirdRoute,
});

const routes = [
	{ key: 'first', title: 'First' },
	{ key: 'second', title: 'Second' },
	{ key: 'third', title: 'Third' },
];

export const PlansNavigator = () => {
	const layout = useWindowDimensions();
	const [index, setIndex] = useState(0);
	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width, height: 1000 }}
		/>
	);
};
