import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, type TextProps, type TextStyle } from 'react-native';
import bodyStyle from './bodyStyle';
import sBodyStyle from './sBodyStyle';
import xsBodyStyle from './xsBodyStyle';
import buttonLabelStyle from './buttonLabelStyle';
import h1Style from './h1Style';
import h2Style from './h2Style';
import titleStyle from './titleStyle';

const makeText = (textStyle: TextStyle) => {
	const TextComponent = ({ children, style, ...props }: TextProps) => {
		const { colors } = useTheme();
		return (
			<Text {...props} style={[{ color: colors.text }, textStyle, style]}>
				{children}
			</Text>
		);
	};
	return TextComponent;
};

const Body = makeText(bodyStyle);
const SBody = makeText(sBodyStyle);
const XsBody = makeText(xsBodyStyle);
const ButtonLabel = makeText(buttonLabelStyle);
const H1 = makeText(h1Style);
const H2 = makeText(h2Style);
const Title = makeText(titleStyle);

export { XsBody, Body, SBody, ButtonLabel, H1, H2, Title };
