import React from 'react';
import LoginLightHeader from './LoginLightHeader';
import LoginDarkHeader from './LoginDarkHeader';
import NoLoginHeader from './NoLoginHeader';
import { View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export type MainHeaderStyle = 'login-light' | 'login-dark' | 'no-login';

interface MainHeaderProps {
	styleType: MainHeaderStyle;
	containerStyle?: ViewStyle;
}

export const MainHeader = ({ styleType, containerStyle }: MainHeaderProps) => {
	const { navigate } = useNavigation();
	const onLoginPress = () => {
		navigate('Plans');
	};

	const onLogoPress = () => {
		//TODO: navigate to home screen
		console.log('Logo Pressed');
	};

	return (
		<View style={containerStyle}>
			{styleType === 'login-light' && (
				<LoginLightHeader
					onLogoPress={onLogoPress}
					onLoginPress={onLoginPress}
				/>
			)}
			{styleType === 'login-dark' && (
				<LoginDarkHeader
					onLogoPress={onLogoPress}
					onLoginPress={onLoginPress}
				/>
			)}
			{styleType === 'no-login' && <NoLoginHeader onLogoPress={onLogoPress} />}
		</View>
	);
};
