import React from 'react';
import PlanTitleItem from './PlanTitleItem';
import { View, StyleSheet } from 'react-native';
import { PlanData } from 'features/plans/types';
import { useAppDispatch } from 'services/store/hooks';
import { plansActions } from 'features/plans/slice';
import { spacing } from 'application/theme';

interface PlanTitlesProps {
	basicPlan: PlanData;
	standardPlan: PlanData;
	premiumPlan: PlanData;
	selectedPlanId: number;
}

const PlanTitles = ({
	basicPlan,
	standardPlan,
	premiumPlan,
	selectedPlanId,
}: PlanTitlesProps) => {
	const dispatch = useAppDispatch();
	const onSelectedPlanChange = (id: number) => {
		dispatch(plansActions.setSelectedPlanId(id));
	};
	return (
		<View style={styles.container}>
			<PlanTitleItem
				isSelected={basicPlan.id === selectedPlanId}
				onPress={onSelectedPlanChange}
				planId={basicPlan.id}
				title={basicPlan.title}
			/>
			<PlanTitleItem
				isSelected={standardPlan.id === selectedPlanId}
				onPress={onSelectedPlanChange}
				planId={standardPlan.id}
				title={standardPlan.title}
			/>
			<PlanTitleItem
				isSelected={premiumPlan.id === selectedPlanId}
				onPress={onSelectedPlanChange}
				planId={premiumPlan.id}
				title={premiumPlan.title}
			/>
		</View>
	);
};

export default PlanTitles;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: spacing.s56,
	},
});
