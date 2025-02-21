import { colors } from 'application/theme';
import { font_size } from 'application/theme/dimens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	text: {
		color: colors.white,
		fontFamily: 'SFProDisplay',
		fontSize: font_size.f36,
		fontWeight: '500',
	},
});

export default styles.text;
