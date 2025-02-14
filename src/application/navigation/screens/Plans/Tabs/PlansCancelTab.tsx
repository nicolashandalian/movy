import React from 'react';
import { colors } from 'application/theme';
import { View, StyleSheet, LayoutChangeEvent } from 'react-native';
import { Title } from 'ui/text';
import { PlansTabs } from '../Constants';

interface PlansCancelTabProps {
	onLayout: (event: LayoutChangeEvent) => void;
}

const PlansCancelTab = ({ onLayout }: PlansCancelTabProps) => {
	return (
		<View style={styles.container} onLayout={onLayout}>
			<Title style={{ color: colors.white }}>{PlansTabs.CANCEL}</Title>
		</View>
	);
};

export default PlansCancelTab;

const styles = StyleSheet.create({
	container: { flex: 1, padding: 20 },
});
