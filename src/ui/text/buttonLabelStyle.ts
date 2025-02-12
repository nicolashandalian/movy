import { colors } from 'application/theme';
import { font_size } from 'application/theme/dimens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	text: {
		color: colors.blue,
		fontFamily: 'SFProDisplay',
		fontSize: font_size.m,
	},
});

export default styles.text;
