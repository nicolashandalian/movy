import React from 'react';
import SelectPlanDescription from './screens/Onboarding/SelectPlanDescription/SelectPlanDescription';
import SelectIdealPlan from './screens/Onboarding/SelectIdealPlan/SelectIdealPlan';
import CreateAccount from './screens/Onboarding/CreateAccount/CreateAccount';
import Subscribe from './screens/Onboarding/Subscribe/Subscribe';
import SetPayment from './screens/Onboarding/SetPayment/SetPayment';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="SelectPlanDescription"
				component={SelectPlanDescription}
			/>
			<Stack.Screen name="SelectIdealPlan" component={SelectIdealPlan} />
			<Stack.Screen name="CreateAccount" component={CreateAccount} />
			<Stack.Screen name="Subscribe" component={Subscribe} />
			<Stack.Screen name="SetPayment" component={SetPayment} />
		</Stack.Navigator>
	);
};
