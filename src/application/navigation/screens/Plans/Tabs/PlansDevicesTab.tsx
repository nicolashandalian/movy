import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Body } from 'ui/text';
import { PlansTabs } from '../Constants';

interface PlansDevicesTabProps {
	style?: ViewStyle;
}

const PlansDevicesTab = ({ style }: PlansDevicesTabProps) => {
	return (
		<View style={[style, styles.container]}>
			<Body>{PlansTabs.DEVICES}</Body>
			<Body>{PlansTabs.DEVICES}</Body>
			<Body>{PlansTabs.DEVICES}</Body>
			<Body>{PlansTabs.DEVICES}</Body>
			<Body>{PlansTabs.DEVICES}</Body>
			<Body>{PlansTabs.DEVICES}</Body>
			<Body>{PlansTabs.DEVICES}</Body>
			<Body>{PlansTabs.DEVICES}</Body>
			<Body>{PlansTabs.DEVICES}</Body>
			<Body>{PlansTabs.DEVICES}</Body>
			<Body>{PlansTabs.DEVICES}</Body>
		</View>
	);
};

export default PlansDevicesTab;

const styles = StyleSheet.create({
	container: {},
});
