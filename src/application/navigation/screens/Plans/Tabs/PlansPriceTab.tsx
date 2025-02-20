import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Body } from 'ui/text';
import { strings } from 'services/localization';
import { colors, spacing } from 'application/theme';
import { RoundedButton } from 'ui/button';
import PlanFeaturesList, {
	transformPlansData,
} from 'ui/plansFeaturesList/PlanFeaturesList';
import { usePlans } from 'features/plans/queries';

interface PlansPriceTabProps {
	style?: ViewStyle;
}

const PlansPriceTab = ({ style }: PlansPriceTabProps) => {
	const { data } = usePlans();
	const onFreeMonthClick = () => {
		//TODO: Implement free month click
		console.log('Free month clicked');
	};
	if (!data) {
		//TODO: handle loading or error state
		return null;
	}
	const plans = data.plans;

	return (
		<View style={[styles.container, style]}>
			<Body style={styles.title}>{strings.plans.price.title}</Body>
			<RoundedButton
				text={strings.plans.price.button}
				onPress={onFreeMonthClick}
				style={styles.freeMonthButton}
			/>
			<PlanFeaturesList data={transformPlansData(plans)} darkMode />
		</View>
	);
};

export default PlansPriceTab;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	freeMonthButton: { marginBottom: spacing.l, marginTop: spacing.s56 },
	title: { color: colors.white },
});
