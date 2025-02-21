import React from 'react';
import PlansBanner from './PlansBanner';
import LoginDarkHeader from 'ui/header/LoginDarkHeader';
import { View, Image, StyleSheet } from 'react-native';
import { spacing } from 'application/theme';

const PlansHeader = () => {
	const onLogoPress = () => {
		//TODO: navigate to home screen
		console.log('Logo Pressed');
	};
	const onLoginPress = () => {
		//TODO: navigate to login screen
		console.log('Login Pressed');
	};
	return (
		<View>
			<Image
				source={require('../../../../../assets/icons/plansBackground.png')}
			/>
			<LoginDarkHeader
				style={styles.logo}
				onLogoPress={onLogoPress}
				onLoginPress={onLoginPress}
			/>
			<PlansBanner />
		</View>
	);
};

export default PlansHeader;

const styles = StyleSheet.create({
	logo: {
		alignItems: 'center',
		paddingHorizontal: spacing.xxl,
		position: 'absolute',
		top: spacing.s90,
		width: '100%',
	},
});
