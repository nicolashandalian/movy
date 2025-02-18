import { colors } from 'application/theme';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export interface iconProps {
	focused: boolean;
}

const ProfileIcon = ({ focused }: iconProps) => {
	const fillColor = focused ? colors.blue : colors.white;
	return (
		<Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.6667 0C7.72 0 5.33333 2.38667 5.33333 5.33333C5.33333 8.28 7.72 10.6667 10.6667 10.6667C13.6133 10.6667 16 8.28 16 5.33333C16 2.38667 13.6133 0 10.6667 0ZM13.4667 5.33333C13.4667 3.78667 12.2133 2.53333 10.6667 2.53333C9.12 2.53333 7.86667 3.78667 7.86667 5.33333C7.86667 6.88 9.12 8.13333 10.6667 8.13333C12.2133 8.13333 13.4667 6.88 13.4667 5.33333ZM18.8 17.3333C18.8 16.48 14.6267 14.5333 10.6667 14.5333C6.70667 14.5333 2.53333 16.48 2.53333 17.3333V18.8H18.8V17.3333ZM0 17.3333C0 13.7867 7.10667 12 10.6667 12C14.2267 12 21.3333 13.7867 21.3333 17.3333V21.3333H0V17.3333Z"
				fill={fillColor}
			/>
		</Svg>
	);
};

export default ProfileIcon;
