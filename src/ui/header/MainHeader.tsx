import React from 'react';
import LoginLightHeader from './LoginLightHeader';
import LoginDarkHeader from './LoginDarkHeader';
import NoLoginHeader from './NoLoginHeader';
import { View } from 'react-native';

export type MainHeaderStyle = 'login-light' | 'login-dark' | 'no-login';

interface MainHeaderProps {
	style: MainHeaderStyle;
}

export const MainHeader = ({ style }: MainHeaderProps) => {
	const onLoginPress = () => {
		//TODO: navigate to login screen
		console.log('Login Pressed');
	};

	const onLogoPress = () => {
		//TODO: navigate to home screen
		console.log('Logo Pressed');
	};

	return (
		<View>
			{style === 'login-light' && (
				<LoginLightHeader
					onLogoPress={onLogoPress}
					onLoginPress={onLoginPress}
				/>
			)}
			{style === 'login-dark' && (
				<LoginDarkHeader
					onLogoPress={onLogoPress}
					onLoginPress={onLoginPress}
				/>
			)}
			{style === 'no-login' && <NoLoginHeader onLogoPress={onLogoPress} />}
		</View>
	);
};
