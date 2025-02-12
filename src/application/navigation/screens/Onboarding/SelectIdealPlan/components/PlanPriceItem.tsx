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
	selectedPlan: SelectedPlan;
}

const PlanPriceItem = ({
	title,
	basicValue,
	standardValue,
	premiumValue,
	selectedPlan,
}: PlanPriceItemProps) => {
	return (
		<View style={styles.container}>
			<Body style={styles.priceTitle}>{title}</Body>
			<View style={styles.valuesContainer}>
				<Body
					style={
						selectedPlan === 'basic'
							? styles.textSelected
							: styles.textUnselected
					}>
					{basicValue}
				</Body>
				<View style={styles.line} />
				<Body
					style={[
						selectedPlan === 'standard'
							? styles.textSelected
							: styles.textUnselected,
						styles.standardText,
					]}>
					{standardValue}
				</Body>
				<View style={styles.line} />
				<Body
					style={
						selectedPlan === 'premium'
							? styles.textSelected
							: styles.textUnselected
					}>
					{premiumValue}
				</Body>
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
