import { colors } from 'application/theme';
import { font_size, spacing } from 'application/theme/dimens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	text: {
		color: colors.white,
		fontFamily: 'SFProDisplay',
		fontSize: font_size.s,
		lineHeight: spacing.l,
	},
});

export default styles.text;
