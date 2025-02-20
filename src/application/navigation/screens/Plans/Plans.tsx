import React from 'react';
import PlansHeader from './components/PlansHeader';
import { StyleSheet, View } from 'react-native';
import {
	GestureHandlerRootView,
	ScrollView as NestedScrollView,
} from 'react-native-gesture-handler';
import { PlansScreenProps } from 'application/navigation/types';
import { colors } from 'application/theme';
import { PlansNavigator } from './PlansNavigator';

const TAB_HEIGHT = 1000;

const Plans: React.FC<PlansScreenProps> = () => {
	return (
		<GestureHandlerRootView style={styles.gestureHandler}>
			<NestedScrollView
				style={styles.container}
				contentContainerStyle={styles.container}>
				<View>
					<PlansHeader />
					<View style={{ height: TAB_HEIGHT }}>{PlansNavigator()}</View>
				</View>
			</NestedScrollView>
		</GestureHandlerRootView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.darkGray,
	},
	gestureHandler: { flex: 1 },
});

export default Plans;
