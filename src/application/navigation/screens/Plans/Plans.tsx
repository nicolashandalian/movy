import React from 'react';
import PlansHeader from './components/PlansHeader';
import {
	StyleSheet,
	useWindowDimensions,
	ScrollView,
	View,
} from 'react-native';

import { PlansScreenProps } from 'application/navigation/types';
import { colors, spacing } from 'application/theme';
import { PlansNavigator } from './PlansNavigator';

const Plans: React.FC<PlansScreenProps> = () => {
	const layout = useWindowDimensions();
	const tabHeight = layout.height - spacing.s70;
	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.container}>
			<PlansHeader />
			<View style={{ height: tabHeight }}>{PlansNavigator()}</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.darkGray,
	},
});

export default Plans;
