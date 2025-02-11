import React from 'react';
import { MovyLogo } from 'assets/icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { strings } from 'services/localization';
import { spacing } from 'application/theme';
import { TextButton } from '../button';

interface LoginDarkHeaderProps {
	onLogoPress: () => void;
	onLoginPress: () => void;
}

const LoginDarkHeader = ({
	onLogoPress,
	onLoginPress,
}: LoginDarkHeaderProps) => {
	//TODO: replace text button with proper button
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onLogoPress}>
				<MovyLogo />
			</TouchableOpacity>
			<TextButton
				style={styles.loginButton}
				text={strings.common.login}
				onPress={onLoginPress}
			/>
		</View>
	);
};

export default LoginDarkHeader;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	loginButton: { marginEnd: spacing.m },
});
