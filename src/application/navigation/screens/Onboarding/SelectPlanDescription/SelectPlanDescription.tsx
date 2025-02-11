import React from 'react';
import StepText from '../components/StepText';
import PlansDescriptionItem from './components/PlansDescriptionItem';
import { FlatList, StyleSheet, View } from 'react-native';
import { SelectPlanDescriptionScreenProps } from 'application/navigation/types';
import { Screen } from 'ui';
import { CircleCheck } from 'assets/icons';
import { strings } from 'services/localization';
import { spacing } from 'application/theme';
import { H1 } from 'ui/text';
import { RoundedButton } from 'ui/button';

const CURRENT_STEP = 1;
const PLANS_DATA = [
	strings.onboarding.selectPlan.freeMonthDescription,
	strings.onboarding.selectPlan.reminderDescription,
	strings.onboarding.selectPlan.cancellationDescription,
];

const SelectPlanDescription: React.FC<
	SelectPlanDescriptionScreenProps
> = () => {
	const onContinuePress = () => {
		//TODO: Navigate to SelectPlan screen
	};
	return (
		<Screen headerStyle="login-light">
			<View style={styles.container}>
				<View>
					<CircleCheck />
					<StepText style={styles.stepText} currentStep={CURRENT_STEP} />
					<H1 style={styles.title}>{strings.onboarding.selectPlan.title}</H1>
					<FlatList
						style={styles.plansList}
						data={PLANS_DATA}
						scrollEnabled={false}
						renderItem={({ item }) => <PlansDescriptionItem text={item} />}
						keyExtractor={(_, index) => index.toString()}
					/>
				</View>
				<RoundedButton
					style={styles.continueButton}
					text={strings.onboarding.selectPlan.buttonTitle}
					onPress={onContinuePress}
				/>
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		alignContent: 'center',
		flex: 1,
		justifyContent: 'space-between',
		marginTop: spacing.s70,
	},
	continueButton: { marginBottom: spacing.m, marginHorizontal: spacing.l },
	plansList: { marginEnd: spacing.s56, marginTop: spacing.s },
	stepText: {
		marginTop: spacing.l,
	},
	title: {
		marginTop: spacing.xxs,
	},
});

export default SelectPlanDescription;
