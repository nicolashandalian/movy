import React from 'react';
import { colors } from 'application/theme';
import { View, StyleSheet, LayoutChangeEvent } from 'react-native';
import { Title } from 'ui/text';
import { PlansTabs } from '../Constants';

interface PlansPriceTabProps {
	onLayout: (event: LayoutChangeEvent) => void;
}

const PlansPriceTab = ({ onLayout }: PlansPriceTabProps) => {
	return (
		<View style={styles.container} onLayout={onLayout}>
			<Title style={{ color: colors.white }}>{PlansTabs.PRICE}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.PRICE}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.PRICE}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.PRICE}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.PRICE}</Title>
		</View>
	);
};

export default PlansPriceTab;

const styles = StyleSheet.create({
	container: { flex: 1, padding: 20 },
});
