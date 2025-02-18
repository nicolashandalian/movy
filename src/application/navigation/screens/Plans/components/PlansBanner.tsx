import React from 'react';
import { spacing } from 'application/theme';
import { View, StyleSheet } from 'react-native';
import { strings } from 'services/localization';
import { SRoundedButton } from 'ui/button';
import { Title, XsBody } from 'ui/text';
import { useNavigation } from '@react-navigation/native';

const PlansBanner = () => {
	const { navigate } = useNavigation();
	const onTryNow = () => {
		navigate('HomeNavigator');
	};
	return (
		<View style={styles.container}>
			<Title>{strings.plans.bannerTitle}</Title>
			<XsBody style={styles.subtitle}>{strings.plans.bannerSubtitle}</XsBody>
			<SRoundedButton
				style={styles.button}
				text={strings.plans.bannerButton}
				onPress={onTryNow}
			/>
		</View>
	);
};

export default PlansBanner;

const styles = StyleSheet.create({
	button: { marginTop: spacing.xxl },
	container: {
		alignItems: 'center',
		paddingHorizontal: spacing.xxl,
		position: 'absolute',
		top: spacing.s320,
		width: '100%',
	},
	subtitle: {
		textTransform: 'uppercase',
	},
});
