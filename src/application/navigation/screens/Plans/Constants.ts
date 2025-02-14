import type { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { colors, spacing } from 'application/theme';
import { radius } from 'application/theme/dimens';
import bodyStyle from 'ui/text/bodyStyle';

enum PlansTabs {
	PRICE = 'Precio',
	CANCEL = 'Cancelar',
	DEVICES = 'Dispositivos',
}

const TabScreenOptions: MaterialTopTabNavigationOptions = {
	tabBarStyle: {
		backgroundColor: colors.blue,
	},
	tabBarItemStyle: {
		height: spacing.xxl,
		justifyContent: 'center',
		paddingTop: spacing.xxs,
	},
	tabBarLabelStyle: bodyStyle,
	tabBarIndicatorStyle: {
		backgroundColor: colors.purple,
		height: '100%',
		borderRadius: radius.m,
	},
};

export { TabScreenOptions, PlansTabs };
