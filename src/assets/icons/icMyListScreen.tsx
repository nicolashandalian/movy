import { colors } from 'application/theme';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export interface iconProps {
	focused: boolean;
}

const MyListIcon = ({ focused }: iconProps) => {
	const fillColor = focused ? colors.blue : colors.white;
	return (
		<Svg width={33} height={32} viewBox="0 0 40 40" fill="none">
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M26.6667 10H6.66675V13.3333H26.6667V10ZM26.6667 16.6667H6.66675V20H26.6667V16.6667ZM6.66675 23.3333H20.0001V26.6667H6.66675V23.3333ZM31.6667 28.3333L23.3334 33.3333V23.3333L31.6667 28.3333Z"
				fill={fillColor}
			/>
		</Svg>
	);
};

export default MyListIcon;
