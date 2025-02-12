import React from 'react';
import StepText from '../components/StepText';
import { StyleSheet, View } from 'react-native';
import { SetPaymentScreenProps } from 'application/navigation/types';
import { Screen } from 'ui';
import { CreditCard } from 'assets/icons';
import { strings } from 'services/localization';
import { spacing } from 'application/theme';
import { Body, H1 } from 'ui/text';
import { NextButton } from 'ui/button';
import { formatShortDate } from 'services/dates/format';
import { addMonths } from 'date-fns';

const CURRENT_STEP = 3;

const SetPayment: React.FC<SetPaymentScreenProps> = ({ navigation }) => {
	const cancelDate = formatShortDate(addMonths(new Date(), 1));
	const cancelDateString = strings
		.formatString(strings.onboarding.setPayment.cancelDate, cancelDate)
		.toString();
	const onContinuePress = () => {
		//TODO: Navigate to the next screen
		navigation.navigate('Subscribe');
	};
	return (
		<Screen headerStyle="login-light">
			<View style={styles.container}>
				<CreditCard />
				<StepText style={styles.stepText} currentStep={CURRENT_STEP} />
				<H1 style={styles.title}>{strings.onboarding.setPayment.title}</H1>
				<Body style={styles.description}>{cancelDateString}</Body>
				<Body style={styles.description}>
					{strings.onboarding.setPayment.reminderDescription}
				</Body>
				<Body style={styles.description}>
					{strings.onboarding.setPayment.cancelDescription}
				</Body>

				<NextButton
					style={styles.continueButton}
					text={strings.onboarding.setPayment.buttonTitle}
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
		marginTop: spacing.s90,
		paddingHorizontal: spacing.xs,
	},
	continueButton: { marginHorizontal: spacing.xxs, marginTop: spacing.m },
	description: { marginEnd: spacing.s120, marginTop: spacing.l },
	stepText: {
		marginTop: spacing.l,
	},
	title: {
		marginTop: spacing.xxs,
	},
});

export default SetPayment;
