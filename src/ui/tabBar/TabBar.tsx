import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import TabBarButton from './TabBarButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomTabBar: React.FC<BottomTabBarProps> = ({
	state,
	descriptors,
	navigation,
}) => {
	const insets = useSafeAreaInsets();
	return (
		<LinearGradient
			colors={[
				'rgba(66, 64, 115, 0)',
				'rgba(66, 64, 115, 0.9)',
				'rgba(66, 64, 115, 1)',
			]}
			locations={[0, 0.3, 0.6]}
			style={[{ bottom: insets.bottom }, styles.container]}>
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
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 70,
		left: 0,
		position: 'absolute',
		right: 0,
	},
});

export default CustomTabBar;
