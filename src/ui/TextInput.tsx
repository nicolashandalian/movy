import React from 'react';
import { useTheme } from '@react-navigation/native';
import { radius, spacing } from 'application/theme/dimens';
import { colors } from 'application/theme';
import {
	TextInput as RNTextInput,
	StyleSheet,
	TextInputProps,
	TouchableOpacity,
	View,
} from 'react-native';
import { Body } from './text';
import { strings } from 'services/localization';

const styles = StyleSheet.create({
	icon: {
		alignItems: 'center',
		borderColor: colors.gray,
		borderRadius: radius.xl,
		borderWidth: 1,
		end: spacing.s,
		height: 30,
		justifyContent: 'center',
		position: 'absolute',
		top: spacing.l,
		width: 30,
	},
	input: {
		borderColor: colors.gray,
		borderRadius: radius.xs,
		borderWidth: 1,
		paddingStart: spacing.m,
		paddingVertical: spacing.s,
	},
	question: {
		color: colors.gray,
	},
});

interface CustomTextInputProps extends TextInputProps {
	showQuestionIcon?: boolean;
	onQuestionPress?: () => void;
}

export const TextInput: React.FC<CustomTextInputProps> = ({
	showQuestionIcon,
	onQuestionPress,
	style,
	...props
}) => {
	const { colors: themeColors } = useTheme();
	return (
		<View>
			<RNTextInput
				style={[
					styles.input,
					{ color: themeColors.text, borderBottomColor: themeColors.border },
					style,
				]}
				placeholderTextColor={colors.black}
				{...props}
			/>
			{showQuestionIcon && (
				<TouchableOpacity style={styles.icon} onPress={onQuestionPress}>
					<Body style={styles.question}>{strings.common.questionMark}</Body>
				</TouchableOpacity>
			)}
		</View>
	);
};
