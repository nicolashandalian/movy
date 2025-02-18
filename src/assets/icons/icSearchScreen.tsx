import { colors } from 'application/theme';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export interface iconProps {
	focused: boolean;
}

const SearchIcon = ({ focused }: iconProps) => {
	const fillColor = focused ? colors.blue : colors.white;
	return (
		<Svg width={33} height={32} viewBox="0 0 33 32" fill="none">
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.1133 18.6667H21.1667L27.82 25.3333L25.8333 27.32L19.1667 20.6667V19.6133L18.8067 19.24C17.2867 20.5467 15.3133 21.3333 13.1667 21.3333C8.38 21.3333 4.5 17.4533 4.5 12.6667C4.5 7.88 8.38 4 13.1667 4C17.9533 4 21.8333 7.88 21.8333 12.6667C21.8333 14.8133 21.0467 16.7867 19.74 18.3067L20.1133 18.6667ZM7.16667 12.6667C7.16667 15.9867 9.84667 18.6667 13.1667 18.6667C16.4867 18.6667 19.1667 15.9867 19.1667 12.6667C19.1667 9.34667 16.4867 6.66667 13.1667 6.66667C9.84667 6.66667 7.16667 9.34667 7.16667 12.6667Z"
				fill={fillColor}
			/>
		</Svg>
	);
};

export default SearchIcon;
