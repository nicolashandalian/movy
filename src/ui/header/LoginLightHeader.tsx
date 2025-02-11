import React from 'react';
import { MovyBlueLogo } from 'assets/icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { strings } from 'services/localization';
import { TextButton } from '../button';
import { spacing } from 'application/theme';

interface LoginLightHeaderProps {
	onLogoPress: () => void;
	onLoginPress: () => void;
}

const LoginLightHeader = ({
	onLogoPress,
	onLoginPress,
}: LoginLightHeaderProps) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onLogoPress}>
				<MovyBlueLogo />
			</TouchableOpacity>
			<TextButton
				style={styles.loginButton}
				text={strings.common.login}
				onPress={onLoginPress}
			/>
		</View>
	);
};

export default LoginLightHeader;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	loginButton: { marginEnd: spacing.m },
});
