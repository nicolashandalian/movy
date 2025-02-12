import { colors } from 'application/theme';
import { radius, spacing } from 'application/theme/dimens';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Body } from 'ui/text';

interface RoundedButtonProps {
	style?: ViewStyle;
	text: string;
	onPress: () => void;
}

export const RoundedButton = ({ style, text, onPress }: RoundedButtonProps) => {
	return (
		<View style={style}>
			<TouchableOpacity style={styles.container} onPress={onPress}>
				<Body style={styles.text}>{text}</Body>
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
		padding: spacing.s,
		width: '100%',
	},
	text: {
		alignSelf: 'center',
		color: colors.white,
		textTransform: 'uppercase',
	},
});
