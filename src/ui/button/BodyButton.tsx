import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Body } from 'ui/text';

interface TextButtonProps {
	style?: ViewStyle;
	text: string;
	onPress: () => void;
}

export const BodyButton = ({ style, text, onPress }: TextButtonProps) => {
	return (
		<TouchableOpacity style={style} onPress={onPress}>
			<Body style={styles.text}>{text}</Body>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	text: {
		fontWeight: '500',
	},
});
