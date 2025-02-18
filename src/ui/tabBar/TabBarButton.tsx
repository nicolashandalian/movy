import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { colors } from 'application/theme';
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
}

const TabBarButton: React.FC<TabBarButtonProps> = ({
	route,
	onPress,
	Icon,
	isFocused,
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
});

export default TabBarButton;
