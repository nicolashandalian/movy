import React from 'react';
import { colors } from 'application/theme';
import { ScrollView, StyleSheet } from 'react-native';
import { Title } from 'ui/text';
import { PlansTabs } from '../Constants';

interface PlansCancelTabProps {}

const PlansCancelTab = ({}: PlansCancelTabProps) => {
	return (
		<ScrollView style={styles.container}>
			<Title style={{ color: colors.white }}>{PlansTabs.CANCEL}</Title>
		</ScrollView>
	);
};

export default PlansCancelTab;

const styles = StyleSheet.create({
	container: { padding: 20 },
});
