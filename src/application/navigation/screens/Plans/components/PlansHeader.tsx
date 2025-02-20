import React from 'react';
import PlansBanner from './PlansBanner';
import NoLoginHeader from 'ui/header/NoLoginHeader';
import { View, Image, StyleSheet } from 'react-native';
import { spacing } from 'application/theme';

const PlansHeader = () => {
	const onLogoPress = () => {
		//TODO: navigate to home screen
		console.log('Logo Pressed');
	};
	return (
		<View>
			<Image
				source={require('../../../../../assets/icons/plansBackground.png')}
			/>
			<NoLoginHeader onLogoPress={onLogoPress} style={styles.logo} />
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
