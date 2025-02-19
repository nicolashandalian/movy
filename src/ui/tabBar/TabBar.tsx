import React from 'react';
import TabBarButton from './TabBarButton';
import { StyleSheet, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { colors, spacing } from 'application/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomTabBar: React.FC<BottomTabBarProps> = ({
	state,
	descriptors,
	navigation,
}) => {
	const { bottom } = useSafeAreaInsets();
	return (
		<View style={[styles.container, { paddingBottom: bottom }]}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
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
						Icon={Icon}
					/>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.backgroundGray,
		bottom: 0,
		flexDirection: 'row',
		paddingTop: spacing.m,
		position: 'absolute',
	},
});

export default CustomTabBar;
