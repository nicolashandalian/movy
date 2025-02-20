import React from 'react';
import { colors, spacing } from 'application/theme';
import { View, StyleSheet } from 'react-native';
import { Body } from 'ui/text';
import { SelectedPlan } from './PlanFeaturesList';

interface PlanPriceItemProps {
	title: string;
	basicValue: string;
	standardValue: string;
	premiumValue: string;
	selectedPlan?: SelectedPlan;
	darkMode?: boolean;
}

const getTextStyle = (
	plan: SelectedPlan,
	selectedPlan?: SelectedPlan,
	darkMode?: boolean,
) => {
	switch (true) {
		case darkMode:
			return styles.textDarkMode;
		case selectedPlan === plan:
			return styles.textSelected;
		default:
			return styles.textUnselected;
	}
};

const PlanPriceItem = ({
	title,
	basicValue,
	standardValue,
	premiumValue,
	selectedPlan,
	darkMode,
}: PlanPriceItemProps) => {
	const basicTextStyle = getTextStyle('basic', selectedPlan, darkMode);
	const standardTextStyle = getTextStyle('standard', selectedPlan, darkMode);
	const premiumTextStyle = getTextStyle('premium', selectedPlan, darkMode);
	return (
		<View style={styles.container}>
			{!darkMode && <Body style={styles.priceTitle}>{title}</Body>}
			<View style={styles.valuesContainer}>
				<Body style={basicTextStyle}>{basicValue}</Body>
				<View style={styles.line} />
				<Body style={[standardTextStyle, styles.standardText]}>
					{standardValue}
				</Body>
				<View style={styles.line} />
				<Body style={premiumTextStyle}>{premiumValue}</Body>
			</View>
		</View>
	);
};

export default PlanPriceItem;

const styles = StyleSheet.create({
	container: {},
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
	standardText: {
		marginEnd: spacing.s,
	},
	textDarkMode: {
		color: colors.darkWhite,
	},
	textSelected: {
		color: colors.blue,
	},
	textUnselected: {
		color: colors.gray,
	},
	valuesContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: spacing.xxl,
	},
});
