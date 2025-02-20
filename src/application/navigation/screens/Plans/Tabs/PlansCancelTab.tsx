import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Body } from 'ui/text';
import { PlansTabs } from '../Constants';

interface PlansCancelTabProps {
	style?: ViewStyle;
}

const PlansCancelTab = ({ style }: PlansCancelTabProps) => {
	return (
		<View style={[style, styles.container]}>
			<Body>{PlansTabs.CANCEL}</Body>
		</View>
	);
};

export default PlansCancelTab;

const styles = StyleSheet.create({
	container: {},
});
