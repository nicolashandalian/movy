import React from 'react';
import { colors } from 'application/theme';
import { View, StyleSheet, LayoutChangeEvent } from 'react-native';
import { Title } from 'ui/text';
import { PlansTabs } from '../Constants';

interface PlansDevicesTabProps {
	onLayout: (event: LayoutChangeEvent) => void;
}

const PlansDevicesTab = ({ onLayout }: PlansDevicesTabProps) => {
	return (
		<View style={styles.container} onLayout={onLayout}>
			<Title style={{ color: colors.white }}>{PlansTabs.DEVICES}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.DEVICES}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.DEVICES}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.DEVICES}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.DEVICES}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.DEVICES}</Title>
		</View>
	);
};

export default PlansDevicesTab;

const styles = StyleSheet.create({
	container: { flex: 1, padding: 20 },
});
