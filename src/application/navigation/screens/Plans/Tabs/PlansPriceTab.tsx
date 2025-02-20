import React from 'react';
import { colors } from 'application/theme';
import { View, StyleSheet } from 'react-native';
import { Title } from 'ui/text';
import { PlansTabs } from '../Constants';

const PlansPriceTab = () => {
	return (
		<View style={styles.container}>
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
	container: {},
});
