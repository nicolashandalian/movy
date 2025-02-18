/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Home from './screens/Home/Tabs/Home';
import ProductDetails from './screens/Products/ProductDetails';
import Products from './screens/Products/Products';
import Settings from './screens/Settings/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Settings" component={Settings} />
			<Stack.Screen name="Products" component={Products} />
			<Stack.Screen name="ProductDetails" component={ProductDetails} />
		</Stack.Navigator>
	);
};
