import React from 'react';
import StepText from '../components/StepText';
import PlanTitles from './components/PlanTitles';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SelectIdealPlanScreenProps } from 'application/navigation/types';
import { Screen } from 'ui';
import { strings } from 'services/localization';
import { spacing } from 'application/theme';
import { Body, H1, SBody } from 'ui/text';
import { RoundedButton } from 'ui/button';
import { usePlans } from 'features/plans/queries';
import { useAppSelector } from 'services/store/hooks';
import PlanFeaturesList, {
	SelectedPlan,
	transformPlansData,
} from './components/PlanFeaturesList';

const CURRENT_STEP = 1;

const SelectIdealPlan: React.FC<SelectIdealPlanScreenProps> = () => {
	const { data } = usePlans();
	const selectedPlanId = useAppSelector((state) => state.plans);
	const onContinuePress = () => {
		//TODO: Navigate to SelectPlan screen
	};
	if (!data) {
		//TODO: handle loading or error state
		return null;
	}
	const plans = data.plans;
	const basicPlan = plans.at(0)!;
	const standardPlan = plans.at(1)!;
	const premiumPlan = plans.at(2)!;
	const planMap: Record<number, SelectedPlan> = {
		[basicPlan.id]: 'basic',
		[standardPlan.id]: 'standard',
		[premiumPlan.id]: 'premium',
	};

	const selectedPlan = planMap[selectedPlanId] ?? 'basic';
	return (
		<Screen headerStyle="login-light">
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<View>
						<StepText style={styles.stepText} currentStep={CURRENT_STEP} />
						<H1 style={styles.title}>
							{strings.onboarding.selectIdealPlan.title}
						</H1>
						<Body style={styles.subtitle}>
							{strings.onboarding.selectIdealPlan.changePlan}
						</Body>
						<PlanTitles
							basicPlan={basicPlan}
							standardPlan={standardPlan}
							premiumPlan={premiumPlan}
							selectedPlanId={selectedPlanId}
						/>
						<PlanFeaturesList
							data={transformPlansData(plans)}
							selectedPlan={selectedPlan}
						/>
						<SBody style={styles.terms}>
							{strings.onboarding.selectIdealPlan.termsDescription}
						</SBody>
					</View>
					<RoundedButton
						style={styles.continueButton}
						text={strings.onboarding.selectIdealPlan.buttonTitle}
						onPress={onContinuePress}
					/>
				</View>
			</ScrollView>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		alignContent: 'center',
		marginTop: spacing.s56,
	},
	continueButton: {
		marginBottom: spacing.m,
		marginHorizontal: spacing.l,
		marginTop: spacing.xl,
	},
	stepText: {
		marginTop: spacing.l,
	},
	subtitle: { marginTop: spacing.m },
	terms: { marginTop: spacing.s56 },
	title: {
		marginTop: spacing.xxs,
	},
});

export default SelectIdealPlan;
