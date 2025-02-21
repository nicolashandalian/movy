import React from 'react';
import { colors } from 'application/theme';
import { StyleSheet, ScrollView } from 'react-native';
import { Title } from 'ui/text';
import { PlansTabs } from '../Constants';

interface PlansPriceTabProps {}

const PlansPriceTab = ({}: PlansPriceTabProps) => {
	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.contentContainer}>
			<Title style={{ color: colors.white }}>{PlansTabs.PRICE}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.PRICE}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.PRICE}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.PRICE}</Title>
			<Title style={{ color: colors.white }}>{PlansTabs.PRICE}</Title>
		</ScrollView>
	);
};

export default PlansPriceTab;

const styles = StyleSheet.create({
	container: { flex: 1 },
	contentContainer: { flexGrow: 1, padding: 20 },
});
