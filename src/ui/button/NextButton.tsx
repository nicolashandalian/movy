import { colors } from 'application/theme';
import { radius, spacing } from 'application/theme/dimens';
import { Chevron } from 'assets/icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Body } from 'ui/text';

interface NextButtonProps {
	style?: ViewStyle;
	text: string;
	onPress: () => void;
}

export const NextButton = ({ style, text, onPress }: NextButtonProps) => {
	return (
		<View style={style}>
			<TouchableOpacity style={styles.container} onPress={onPress}>
				<Body style={styles.text}>{text}</Body>
				<Chevron />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignContent: 'center',
		alignSelf: 'center',
		borderColor: colors.gray,
		borderRadius: radius.xs,
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: spacing.m,
		paddingVertical: spacing.s,
		width: '100%',
	},
	text: {
		alignSelf: 'center',
	},
});
