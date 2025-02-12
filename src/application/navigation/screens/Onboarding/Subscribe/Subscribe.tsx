import React from 'react';
import StepText from '../components/StepText';
import { StyleSheet, View } from 'react-native';
import { SubscribeScreenProps } from 'application/navigation/types';
import { Screen, TextInput } from 'ui';
import { strings } from 'services/localization';
import { spacing } from 'application/theme';
import { Body, H1, H2 } from 'ui/text';
import { RoundedButton } from 'ui/button';

const CURRENT_STEP = 2;

const Subscribe: React.FC<SubscribeScreenProps> = ({ navigation }) => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const onContinuePress = () => {
		navigation.navigate('SetPayment');
	};
	return (
		<Screen headerStyle="login-light">
			<View style={styles.container}>
				<StepText style={styles.stepText} currentStep={CURRENT_STEP} />
				<H1 style={styles.title}>{strings.onboarding.subscribe.title}</H1>
				<Body style={styles.description}>
					{strings.onboarding.subscribe.description}
				</Body>
				<H2 style={styles.subtitle}>{strings.onboarding.subscribe.subtitle}</H2>
				<TextInput
					style={styles.emailInput}
					placeholder={strings.common.email}
					onChangeText={setEmail}
					value={email}
				/>
				<TextInput
					style={styles.passwordInput}
					placeholder={strings.common.password}
					onChangeText={setPassword}
					value={password}
				/>
				<RoundedButton
					style={styles.continueButton}
					text={strings.onboarding.createAccount.buttonTitle}
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
		marginTop: spacing.s56,
		paddingHorizontal: spacing.xs,
	},
	continueButton: { marginBottom: spacing.m, marginTop: spacing.l },
	description: { marginEnd: spacing.s70, marginTop: spacing.l },
	emailInput: { marginTop: spacing.m },
	passwordInput: { marginTop: spacing.m },
	stepText: {
		marginTop: spacing.xl,
	},
	subtitle: { marginTop: spacing.l },
	title: {
		marginEnd: spacing.s70,
		marginTop: spacing.xxs,
	},
});

export default Subscribe;
