import React from 'react';
import { colors } from 'application/theme';
import { radius, spacing } from 'application/theme/dimens';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { SBody } from 'ui/text';

interface SRoundedButtonProps {
	style?: ViewStyle;
	text: string;
	onPress: () => void;
}

export const SRoundedButton = ({
	style,
	text,
	onPress,
}: SRoundedButtonProps) => {
	return (
		<View style={style}>
			<TouchableOpacity style={styles.container} onPress={onPress}>
				<SBody style={styles.text}>{text}</SBody>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		backgroundColor: colors.blue,
		borderRadius: radius.l,
		justifyContent: 'center',
		paddingHorizontal: spacing.s,
		paddingVertical: spacing.xxs,
		width: '100%',
	},
	text: {
		alignSelf: 'center',
		color: colors.white,
	},
});
