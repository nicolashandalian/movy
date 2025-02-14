import React, { useState } from 'react';
import PlansPriceTab from './Tabs/PlansPriceTab';
import PlansDevicesTab from './Tabs/PlansDevicesTab';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { PlansTabs, TabScreenOptions } from './Constants';
import PlansCancelTab from './Tabs/PlansCancelTab';
import { colors } from 'application/theme';

const PlansNavigator = () => {
	const Tab = createMaterialTopTabNavigator();
	const [tabHeight, setTabHeight] = useState(0);

	const onLayout = (event: LayoutChangeEvent) => {
		const { height } = event.nativeEvent.layout;
		setTabHeight(height);
	};
	console.log('tabHeight', tabHeight);
	return (
		<View style={[styles.container, { height: tabHeight }]}>
			<Tab.Navigator screenOptions={TabScreenOptions}>
				<Tab.Screen name={PlansTabs.PRICE}>
					{() => <PlansPriceTab onLayout={onLayout} />}
				</Tab.Screen>
				<Tab.Screen name={PlansTabs.CANCEL}>
					{() => <PlansCancelTab onLayout={onLayout} />}
				</Tab.Screen>
				<Tab.Screen name={PlansTabs.DEVICES}>
					{() => <PlansDevicesTab onLayout={onLayout} />}
				</Tab.Screen>
			</Tab.Navigator>
		</View>
	);
};

export default PlansNavigator;

const styles = StyleSheet.create({
	container: {
		borderColor: colors.gableGreen,
		borderWidth: 4,
		flex: 1,
	},
});
