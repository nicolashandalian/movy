/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import CustomTabBar from 'ui/tabBar/TabBar';
import Home from './Tabs/Home';
import HomeIcon from 'assets/icons/icHomeScreen';
import SearchIcon from 'assets/icons/icSearchScreen';
import MyListIcon from 'assets/icons/icMyListScreen';
import ProfileIcon from 'assets/icons/icProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../types';

const Tab = createBottomTabNavigator<TabParamList>();

export const HomeNavigator = () => {
	return (
		<Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
			<Tab.Screen
				options={{
					headerShown: false,
					tabBarLabel: 'Home',
					tabBarIcon: HomeIcon,
				}}
				name={'Home'}
				component={Home}
			/>
			<Tab.Screen
				options={{
					tabBarLabel: 'Search',
					headerShown: false,
					tabBarIcon: SearchIcon,
				}}
				name={'Search'}
				component={Home}
			/>
			<Tab.Screen
				options={{
					tabBarLabel: 'MyList',
					headerShown: false,
					tabBarIcon: MyListIcon,
				}}
				name={'MyList'}
				component={Home}
			/>
			<Tab.Screen
				options={{
					tabBarLabel: 'Profile',
					headerShown: false,
					tabBarIcon: ProfileIcon,
				}}
				name={'Profile'}
				component={Home}
			/>
		</Tab.Navigator>
	);
};
