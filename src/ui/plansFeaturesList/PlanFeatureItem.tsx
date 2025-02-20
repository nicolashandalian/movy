import React from 'react';
import { colors, spacing } from 'application/theme';
import { View, StyleSheet } from 'react-native';
import { SBody } from 'ui/text';
import { SelectedPlan } from './PlanFeaturesList';
import { Check, Cross, GrayCheck, GrayCross } from 'assets/icons';

interface PlanFeatureItemProps {
	title: string;
	basicHasFeature: boolean;
	standardHasFeature: boolean;
	premiumHasFeature: boolean;
	selectedPlan?: SelectedPlan;
	darkMode?: boolean;
}

const getFeatureIcon = (
	hasFeature: boolean,
	isSelected: boolean,
	darkMode?: boolean,
) => {
	switch (true) {
		case hasFeature && darkMode:
			return <Check />;
		case hasFeature && isSelected:
			return <Check />;
		case hasFeature:
			return <GrayCheck />;
		case darkMode:
			return <GrayCross />;
		case isSelected:
			return <Cross />;
		default:
			return <GrayCross />;
	}
};

const PlanFeatureItem = ({
	title,
	basicHasFeature,
	standardHasFeature,
	premiumHasFeature,
	selectedPlan,
	darkMode,
}: PlanFeatureItemProps) => {
	const features = [
		{ hasFeature: basicHasFeature, isSelected: selectedPlan === 'basic' },
		{ hasFeature: standardHasFeature, isSelected: selectedPlan === 'standard' },
		{ hasFeature: premiumHasFeature, isSelected: selectedPlan === 'premium' },
	];

	return (
		<View style={styles.container}>
			<SBody style={[darkMode && styles.darkTitle, styles.priceTitle]}>
				{title}
			</SBody>
			<View style={styles.valuesContainer}>
				{features.map(({ hasFeature, isSelected }, index) => (
					<React.Fragment key={index}>
						{getFeatureIcon(hasFeature, isSelected, darkMode)}
						{index < features.length - 1 && <View style={styles.line} />}
					</React.Fragment>
				))}
			</View>
		</View>
	);
};

export default PlanFeatureItem;

const styles = StyleSheet.create({
	container: {},
	darkTitle: { color: colors.white },
	line: {
		borderWidth: 0.5,
		color: colors.darkGray,
		height: 20,
		width: 1,
	},
	priceTitle: {
		marginTop: spacing.xl,
		paddingHorizontal: spacing.xxl,
		textAlign: 'center',
	},
	valuesContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: spacing.l,
	},
});
