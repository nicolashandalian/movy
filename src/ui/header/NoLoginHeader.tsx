import React from 'react';
import { MovyLogo } from 'assets/icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

interface NoLoginHeaderProps {
	onLogoPress: () => void;
}

const NoLoginHeader = ({ onLogoPress }: NoLoginHeaderProps) => {
	return (
		<View>
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
