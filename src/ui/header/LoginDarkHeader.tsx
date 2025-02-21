import React from 'react';
import { MovyLogo } from 'assets/icons';
import { View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { strings } from 'services/localization';
import { spacing } from 'application/theme';
import { SRoundedButton } from '../button';

interface LoginDarkHeaderProps {
	style?: ViewStyle;
	onLogoPress: () => void;
	onLoginPress: () => void;
}

const LoginDarkHeader = ({
	style,
	onLogoPress,
	onLoginPress,
}: LoginDarkHeaderProps) => {
	return (
		<View style={[style, styles.container]}>
			<TouchableOpacity onPress={onLogoPress}>
				<MovyLogo />
			</TouchableOpacity>
			<SRoundedButton
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
