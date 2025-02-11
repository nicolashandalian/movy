import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { ButtonLabel } from 'ui/text';

interface TextButtonProps {
	style?: ViewStyle;
	text: string;
	onPress: () => void;
}

export const TextButton = ({ style, text, onPress }: TextButtonProps) => {
	return (
		<TouchableOpacity style={style} onPress={onPress}>
			<ButtonLabel>{text}</ButtonLabel>
		</TouchableOpacity>
	);
};
