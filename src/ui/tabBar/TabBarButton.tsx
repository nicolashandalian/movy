import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors, font_size } from 'application/theme';
import { RouteProp } from '@react-navigation/native';

interface IconProps {
	color: string;
	focused: boolean;
	size: number;
}

type IconComponent = React.ComponentType<IconProps>;

interface TabBarButtonProps {
	route: RouteProp<Record<string, object | undefined>, string>;
	onPress: () => void;
	Icon?: IconComponent;
	isFocused: boolean;
	label: string;
}

const TabBarButton: React.FC<TabBarButtonProps> = ({
	route,
	onPress,
	Icon,
	isFocused,
	label,
}) => {
	return (
		<TouchableOpacity
			key={route.key}
			onPress={onPress}
			style={styles.container}>
			{Icon && (
				<Icon
					color={isFocused ? colors.gableGreen : colors.red}
					focused={isFocused}
					size={50}
				/>
			)}

			<Text
				style={[
					{ color: isFocused ? colors.red : colors.gableGreen },
					styles.label,
				]}>
				{label}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'flex-end',
		paddingBottom: 5,
	},
	label: {
		fontFamily: 'Rubik-Bold',
		fontSize: font_size.s,
		lineHeight: 17,
	},
});

export default TabBarButton;
