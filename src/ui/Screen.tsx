import React, { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MainHeader, MainHeaderStyle } from './header';
import { StyleSheet, View } from 'react-native';
import { spacing } from 'application/theme';

interface ScreenProps {
	children: ReactNode;
	headerStyle?: MainHeaderStyle;
}

export const Screen = ({ children, headerStyle }: ScreenProps) => {
	const insets = useSafeAreaInsets();
	return (
		<View
			style={[
				{
					paddingBottom: insets.bottom,
					paddingTop: insets.top,
				},
				styles.container,
			]}>
			{headerStyle && <MainHeader style={headerStyle} />}
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		height: '100%',
		paddingHorizontal: spacing.l,
	},
});
