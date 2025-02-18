import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TabBarButton from './TabBarButton';

const CustomTabBar: React.FC<BottomTabBarProps> = ({
	state,
	descriptors,
	navigation,
}) => {
	return (
		<View style={styles.container}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];

				const label: string =
					typeof options.tabBarLabel === 'function'
						? route.name
						: options.tabBarLabel || options.title || route.name;

				const isFocused = state.index === index;

				const Icon = options.tabBarIcon;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				return (
					<TabBarButton
						key={index}
						route={route}
						onPress={onPress}
						isFocused={isFocused}
						label={label}
						Icon={Icon}
					/>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		bottom: 26,
		flexDirection: 'row',
		height: 100,
		left: 0,
		position: 'absolute',
		right: 0,
	},
});

export default CustomTabBar;
