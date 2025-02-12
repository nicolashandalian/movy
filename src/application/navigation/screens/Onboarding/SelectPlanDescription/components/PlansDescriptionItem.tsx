import React from 'react';
import { spacing } from 'application/theme';
import { Check } from 'assets/icons';
import { View, StyleSheet } from 'react-native';
import { Body } from 'ui/text';

interface PlansDescriptionItemProps {
	text: string;
}

const PlansDescriptionItem = ({ text }: PlansDescriptionItemProps) => {
	return (
		<View style={styles.container}>
			<Check style={styles.check} />
			<Body style={styles.text}>{text}</Body>
		</View>
	);
};

export default PlansDescriptionItem;

const styles = StyleSheet.create({
	check: { alignSelf: 'center' },
	container: {
		alignContent: 'center',
		flexDirection: 'row',
		marginTop: spacing.l,
	},
	text: {
		marginStart: spacing.m,
		paddingEnd: spacing.s,
	},
});
