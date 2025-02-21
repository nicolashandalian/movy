import React, { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MainHeader, MainHeaderStyle } from './header';
import { StyleSheet, View } from 'react-native';
import { colors, spacing } from 'application/theme';

interface ScreenProps {
	children: ReactNode;
	headerStyle?: MainHeaderStyle;
	noPadding?: boolean;
	floatingHeader?: boolean;
}

export const Screen = ({
	children,
	headerStyle,
	noPadding,
	floatingHeader,
}: ScreenProps) => {
	const insets = useSafeAreaInsets();
	const topPadding = !floatingHeader ? insets.top : 0.0;
	return (
		<View
			style={[
				{
					paddingBottom: insets.bottom,
					paddingTop: topPadding,
				},
				styles.container,
				!noPadding && styles.containerPadding,
				headerStyle !== 'login-light' && styles.containerDark,
			]}>
			{headerStyle && (
				<View
					style={
						floatingHeader && [
							{ paddingTop: insets.top },
							styles.floatingHeader,
						]
					}>
					<MainHeader
						styleType={headerStyle}
						containerStyle={noPadding ? styles.containerPadding : undefined}
					/>
				</View>
			)}
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		height: '100%',
	},
	containerDark: { backgroundColor: colors.darkBackground },
	containerPadding: {
		paddingHorizontal: spacing.l,
	},
	floatingHeader: {
		position: 'absolute',
		width: '100%',
		zIndex: 1,
	},
});
