import React from 'react';
import { colors } from 'application/theme';
import { ScrollView, StyleSheet } from 'react-native';
import { Title } from 'ui/text';
import { PlansTabs } from '../Constants';

interface PlansDevicesTabProps {}

const PlansDevicesTab = ({}: PlansDevicesTabProps) => {
	return (
		<ScrollView style={styles.container}>
			<Title style={{ color: colors.white }}>{PlansTabs.DEVICES}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.DEVICES}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.DEVICES}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.DEVICES}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.DEVICES}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.DEVICES}</Title>
		</ScrollView>
	);
};

export default PlansDevicesTab;

const styles = StyleSheet.create({
	container: {},
});
