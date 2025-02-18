import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TabParamList = {
	Home: undefined;
	Search: undefined;
	MyList: undefined;
	Profile: undefined;
};

export type AppStackParamList = {
	Home: undefined;
	Settings: undefined;
	Products: undefined;
	ProductDetails: { id: number };
};

export type AuthStackParamList = {
	SelectPlanDescription: undefined;
	SelectIdealPlan: { changingPlan: boolean };
	CreateAccount: undefined;
	Subscribe: undefined;
	SetPayment: undefined;
	SetCreditCard: undefined;
	Plans: undefined;
	HomeNavigator: undefined;
};

type AppStackNavigatorScreenProps<T extends keyof AppStackParamList> =
	NativeStackScreenProps<AppStackParamList, T>;

type AuthNavigatorScreenProps<T extends keyof AuthStackParamList> =
	NativeStackScreenProps<AuthStackParamList, T>;

export type SelectPlanDescriptionScreenProps =
	AuthNavigatorScreenProps<'SelectPlanDescription'>;
export type SelectIdealPlanScreenProps =
	AuthNavigatorScreenProps<'SelectIdealPlan'>;
export type CreateAccountScreenProps =
	AuthNavigatorScreenProps<'CreateAccount'>;
export type SubscribeScreenProps = AuthNavigatorScreenProps<'Subscribe'>;
export type SetPaymentScreenProps = AuthNavigatorScreenProps<'SetPayment'>;
export type SetCreditCardScreenProps =
	AuthNavigatorScreenProps<'SetCreditCard'>;
export type PlansScreenProps = AuthNavigatorScreenProps<'Plans'>;
export type HomeNavigatorScreenProps =
	AuthNavigatorScreenProps<'HomeNavigator'>;

export type SettingsScreenProps = AppStackNavigatorScreenProps<'Settings'>;
export type ProductsScreenProps = AppStackNavigatorScreenProps<'Products'>;
export type ProductDetailsScreenProps =
	AppStackNavigatorScreenProps<'ProductDetails'>;

export type ProductsScreenNavigationProp = ProductsScreenProps['navigation'];

type AppParamList = AppStackParamList & AuthStackParamList;

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace ReactNavigation {
		interface RootParamList extends AppParamList {}
	}
}
