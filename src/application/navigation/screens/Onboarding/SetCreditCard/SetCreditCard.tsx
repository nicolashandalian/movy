import React from 'react';
import CreditCardForm from './components/CreditCardForm';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SetCreditCardScreenProps } from 'application/navigation/types';
import { Screen } from 'ui';
import { strings } from 'services/localization';
import { spacing } from 'application/theme';
import { Body, H1, SBody } from 'ui/text';
import { BodyButton, RoundedButton } from 'ui/button';
import { CreditCard } from 'assets/icons';
import { dimens } from 'application/theme/dimens';
import { useAppSelector } from 'services/store/hooks';
import { usePlans } from 'features/plans/queries';

const SetCreditCard: React.FC<SetCreditCardScreenProps> = ({ navigation }) => {
	const [name, setName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [creditCardNumber, setCreditCardNumber] = React.useState('');
	const [extraData, setExtraData] = React.useState('');
	const [cvv, setCvv] = React.useState('');
	const selectedPlanId = useAppSelector((state) => state.plans);
	const plan = usePlans().data?.plans.find((p) => p.id === selectedPlanId);
	const definitionAvailable = plan?.hdAvailable ? 'HD' : 'SD';
	const planDescription = strings
		.formatString(
			strings.onboarding.setCreditCard.planDescription,
			definitionAvailable,
			`${plan?.currency} ${plan?.price}`,
		)
		.toString();
	const onContinuePress = () => {
		//TODO: Navigate to home screen
		navigation.navigate('SetPayment');
	};
	const onChangePlanPress = () => {
		navigation.navigate('SelectIdealPlan', { changingPlan: true });
	};
	const onQuestionPress = () => {
		//TODO: Show question modal
		console.log('Question pressed');
	};
	return (
		<Screen headerStyle="login-light">
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<H1 style={styles.title}>{strings.onboarding.setCreditCard.title}</H1>
					<View style={styles.images}>
						<CreditCard
							style={styles.creditCardImage}
							height={dimens.creditCardHeight}
							width={dimens.creditCardWidth}
						/>
						<CreditCard
							style={styles.creditCardImage}
							height={dimens.creditCardHeight}
							width={dimens.creditCardWidth}
						/>
						<CreditCard
							style={styles.creditCardImage}
							height={dimens.creditCardHeight}
							width={dimens.creditCardWidth}
						/>
					</View>
					<CreditCardForm
						name={name}
						setName={setName}
						lastName={lastName}
						setLastName={setLastName}
						creditCardNumber={creditCardNumber}
						setCreditCardNumber={setCreditCardNumber}
						extraData={extraData}
						setExtraData={setExtraData}
						cvv={cvv}
						setCvv={setCvv}
						onQuestionPress={onQuestionPress}
					/>
					<SBody style={styles.planTitle}>{strings.common.yourPlan}</SBody>
					<View style={styles.planDescriptionContainer}>
						<Body style={styles.planDescription}>{planDescription}</Body>
						<BodyButton
							text={strings.common.change}
							onPress={onChangePlanPress}
						/>
					</View>
					<SBody style={styles.terms}>
						{strings.onboarding.setCreditCard.terms}
					</SBody>
					<RoundedButton
						style={styles.continueButton}
						text={strings.onboarding.setCreditCard.buttonTitle}
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
		flex: 1,
		marginTop: spacing.s56,
		paddingHorizontal: spacing.xs,
	},
	continueButton: { marginBottom: spacing.m, marginTop: spacing.l },
	creditCardImage: { marginEnd: spacing.xxs },
	images: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginTop: spacing.m,
	},
	planDescription: { width: '50%' },
	planDescriptionContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: spacing.m,
	},
	planTitle: {
		marginTop: spacing.s,
		textTransform: 'uppercase',
	},
	terms: { marginTop: spacing.xl },
	title: {
		marginEnd: spacing.s70,
		marginTop: spacing.s70,
	},
});

export default SetCreditCard;
