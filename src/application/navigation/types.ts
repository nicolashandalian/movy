import { NativeStackScreenProps } from '@react-navigation/native-stack';

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
};

type AppStackNavigatorScreenProps<T extends keyof AppStackParamList> =
	NativeStackScreenProps<AppStackParamList, T>;

type AuthNavigatorScreenProps<T extends keyof AuthStackParamList> =
	NativeStackScreenProps<AuthStackParamList, T>;

export type HomeScreenProps = AppStackNavigatorScreenProps<'Home'>;
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
