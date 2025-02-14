import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Screen } from 'ui';
import { PlansScreenProps } from 'application/navigation/types';
import { spacing } from 'application/theme';
import PlansNavigator from './PlansNavigator';
import PlansBanner from './components/PlansBanner';

const Plans: React.FC<PlansScreenProps> = () => {
	return (
		<Screen noPadding floatingHeader headerStyle="login-dark">
			<ScrollView
				keyboardShouldPersistTaps="handled"
				contentContainerStyle={styles.container}>
				<View>
					<Image
						source={require('../../../../assets/icons/plansBackground.png')}
					/>
					<PlansBanner />
					<PlansNavigator />
				</View>
			</ScrollView>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingBottom: spacing.m,
	},
});

export default Plans;
