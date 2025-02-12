import React from 'react';
import { useTheme } from '@react-navigation/native';
import { radius, spacing } from 'application/theme/dimens';
import { colors } from 'application/theme';
import {
	TextInput as RNTextInput,
	StyleSheet,
	TextInputProps,
} from 'react-native';

const styles = StyleSheet.create({
	input: {
		borderColor: colors.lightGray,
		borderRadius: radius.xs,
		borderWidth: 1,
		paddingStart: spacing.m,
		paddingVertical: spacing.s,
	},
});

export const TextInput: React.FC<TextInputProps> = ({ style, ...props }) => {
	const { colors: themeColors } = useTheme();
	return (
		<RNTextInput
			style={[
				styles.input,
				{ color: themeColors.text, borderBottomColor: themeColors.border },
				style,
			]}
			placeholderTextColor={colors.black}
			{...props}
		/>
	);
};
