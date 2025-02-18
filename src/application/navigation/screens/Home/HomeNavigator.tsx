/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../types';
import CustomTabBar from 'ui/tabBar/TabBar';
import Home from './Tabs/Home';

const Tab = createBottomTabNavigator<TabParamList>();

export const HomeNavigator = () => {
	return (
		<Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
			<Tab.Screen
				options={{
					tabBarLabel: 'Home',
				}}
				name={'Home'}
				component={Home}
			/>
			<Tab.Screen
				options={{
					tabBarLabel: 'Search',
					headerShown: false,
				}}
				name={'Search'}
				component={Home}
			/>
			<Tab.Screen
				options={{
					tabBarLabel: 'MyList',
					headerShown: false,
				}}
				name={'MyList'}
				component={Home}
			/>
			<Tab.Screen
				options={{
					tabBarLabel: 'Profile',
					headerShown: false,
				}}
				name={'Profile'}
				component={Home}
			/>
		</Tab.Navigator>
	);
};
