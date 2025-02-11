import * as React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { strings } from 'services/localization';
import { SBody } from 'ui/text';

interface StepTextProps {
	style?: TextStyle;
	currentStep: number;
}

const TOTAL_STEPS = 3;

const StepText = ({ style, currentStep }: StepTextProps) => {
	const stepText = strings.onboarding.step
		.replace('{0}', currentStep.toString())
		.replace('{1}', TOTAL_STEPS.toString());

	// Split the string around the dynamic parts
	const [beforeCurrentStep, afterCurrentStep] = stepText.split(
		currentStep.toString(),
	);
	const [beforeTotalSteps, afterTotalSteps] = afterCurrentStep.split(
		TOTAL_STEPS.toString(),
	);
	return (
		<SBody style={style}>
			{beforeCurrentStep}
			<SBody style={styles.boldText}>{currentStep}</SBody>
			{beforeTotalSteps}
			<SBody style={styles.boldText}>{TOTAL_STEPS}</SBody>
			{afterTotalSteps}
		</SBody>
	);
};

export default StepText;

const styles = StyleSheet.create({
	boldText: { fontWeight: 'bold' },
});
