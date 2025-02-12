import React from 'react';
import StepText from '../components/StepText';
import { StyleSheet, View } from 'react-native';
import { CreateAccountScreenProps } from 'application/navigation/types';
import { Screen } from 'ui';
import { LaptopImage, PcImage, PhoneImage, TabletImage } from 'assets/icons';
import { strings } from 'services/localization';
import { spacing } from 'application/theme';
import { Body, H1 } from 'ui/text';
import { RoundedButton } from 'ui/button';

const CURRENT_STEP = 1;

const CreateAccount: React.FC<CreateAccountScreenProps> = () => {
	const onContinuePress = () => {
		//TODO: navigate to the next screen
	};
	return (
		<Screen headerStyle="login-light">
			<View style={styles.container}>
				<View>
					<View style={styles.imagesContainer}>
						<LaptopImage style={styles.image} />
						<PcImage style={styles.image} />
						<TabletImage style={styles.image2} />
						<PhoneImage />
					</View>
					<StepText style={styles.stepText} currentStep={CURRENT_STEP} />
					<H1 style={styles.title}>{strings.onboarding.createAccount.title}</H1>
					<Body style={styles.description}>
						{strings.onboarding.createAccount.description}
					</Body>
				</View>
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
		justifyContent: 'space-between',
		marginTop: spacing.s156,
	},
	continueButton: { marginBottom: spacing.m, marginHorizontal: spacing.l },
	description: { marginEnd: spacing.s70, marginTop: spacing.xxs },
	image: { marginEnd: spacing.s },
	image2: { marginEnd: spacing.xxs },
	imagesContainer: {
		alignItems: 'flex-end',
		flexDirection: 'row',
	},
	stepText: {
		marginTop: spacing.xl,
	},
	title: {
		marginTop: spacing.xxs,
	},
});

export default CreateAccount;
