import React from 'react';
import { colors } from 'application/theme';
import { PlanNameBackground } from 'assets/icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Body } from 'ui/text';

interface PlanTitleItemProps {
	title: string;
	isSelected: boolean;
	planId: number;
	onPress: (planId: number) => void;
}

const PlanTitleItem = ({
	planId,
	title,
	isSelected,
	onPress,
}: PlanTitleItemProps) => {
	const handleOnPress = () => onPress(planId);
	return (
		<TouchableOpacity
			style={[styles.container, !isSelected && styles.disabled]}
			onPress={handleOnPress}>
			<PlanNameBackground style={!isSelected && styles.disabled} />
			<Body style={styles.text}>{title}</Body>
		</TouchableOpacity>
	);
};

export default PlanTitleItem;

const styles = StyleSheet.create({
	container: {},
	disabled: { opacity: 0.8 },
	text: {
		color: colors.white,
		fontWeight: '500',
		left: '20%',
		position: 'absolute',
		top: '35%',
	},
});
