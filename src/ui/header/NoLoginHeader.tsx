import React from 'react';
import { MovyLogo } from 'assets/icons';
import { View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

interface NoLoginHeaderProps {
	style?: ViewStyle;
	onLogoPress: () => void;
}

const NoLoginHeader = ({ style, onLogoPress }: NoLoginHeaderProps) => {
	return (
		<View style={style}>
			<TouchableOpacity style={styles.logo} onPress={onLogoPress}>
				<MovyLogo />
			</TouchableOpacity>
		</View>
	);
};

export default NoLoginHeader;

const styles = StyleSheet.create({
	logo: { alignSelf: 'center' },
});
