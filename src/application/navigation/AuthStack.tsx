import React from 'react';
import SelectPlanDescription from './screens/Onboarding/SelectPlanDescription/SelectPlanDescription';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';
import SelectIdealPlan from './screens/Onboarding/SelectIdealPlan/SelectIdealPlan';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="SelectPlanDescription"
				component={SelectPlanDescription}
			/>
			<Stack.Screen name="SelectIdealPlan" component={SelectIdealPlan} />
		</Stack.Navigator>
	);
};
