import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PlanFeatureItem from './PlanFeatureItem';
import PlanPriceItem from './PlanPriceItem';
import { PlanData } from 'features/plans/types';
import { strings } from 'services/localization';

export type SelectedPlan = 'basic' | 'standard' | 'premium';

interface PlanFeaturesListProps {
	data: (PlanHasFeatureSection | PlanPriceSection)[];
	selectedPlan?: SelectedPlan;
	darkMode?: boolean;
}

interface PlanHasFeatureSection {
	title: string;
	basicValue: boolean;
	standardValue: boolean;
	premiumValue: boolean;
}

interface PlanPriceSection {
	title: string;
	basicValue: string;
	standardValue: string;
	premiumValue: string;
}

const PlanFeaturesList = ({
	data,
	selectedPlan,
	darkMode,
}: PlanFeaturesListProps) => {
	return (
		<FlatList
			scrollEnabled={false}
			style={styles.container}
			data={data}
			renderItem={({ index, item }) =>
				typeof item.basicValue === 'boolean' ? (
					<PlanFeatureItem
						key={index}
						title={item.title}
						basicHasFeature={item.basicValue}
						standardHasFeature={item.standardValue}
						premiumHasFeature={item.premiumValue}
						selectedPlan={selectedPlan}
						darkMode={darkMode}
					/>
				) : (
					<PlanPriceItem
						key={index}
						title={item.title}
						basicValue={item.basicValue}
						standardValue={item.standardValue}
						premiumValue={item.premiumValue}
						selectedPlan={selectedPlan}
						darkMode={darkMode}
					/>
				)
			}
		/>
	);
};

export const transformPlansData = (
	plans: PlanData[],
): (PlanHasFeatureSection | PlanPriceSection)[] => {
	return [
		{
			title: strings.onboarding.selectIdealPlan.monthlyPriceTitle,
			basicValue: `${plans[0].currency} ${plans[0].price}`,
			standardValue: `${plans[1].currency} ${plans[1].price}`,
			premiumValue: `${plans[2].currency} ${plans[2].price}`,
		} as PlanPriceSection,
		{
			title: strings.onboarding.selectIdealPlan.hdAvailableTitle,
			basicValue: plans[0].hdAvailable,
			standardValue: plans[1].hdAvailable,
			premiumValue: plans[2].hdAvailable,
		} as PlanHasFeatureSection,
		{
			title: strings.onboarding.selectIdealPlan.ultraHdAvailableTitle,
			basicValue: plans[0].ultraHdAvailable,
			standardValue: plans[1].ultraHdAvailable,
			premiumValue: plans[2].ultraHdAvailable,
		} as PlanHasFeatureSection,
		{
			title: strings.onboarding.selectIdealPlan.screenAvailableTitle,
			basicValue: plans[0].screenAvailable,
			standardValue: plans[1].screenAvailable,
			premiumValue: plans[2].screenAvailable,
		} as PlanHasFeatureSection,
		{
			title: strings.onboarding.selectIdealPlan.devicesAvailableTitle,
			basicValue: plans[0].devicesAvailable,
			standardValue: plans[1].devicesAvailable,
			premiumValue: plans[2].devicesAvailable,
		} as PlanHasFeatureSection,
		{
			title: strings.onboarding.selectIdealPlan.unlimitedMoviesTitle,
			basicValue: plans[0].unlimitedMovies,
			standardValue: plans[1].unlimitedMovies,
			premiumValue: plans[2].unlimitedMovies,
		} as PlanHasFeatureSection,
		{
			title: strings.onboarding.selectIdealPlan.cancellationTitle,
			basicValue: plans[0].cancellation,
			standardValue: plans[1].cancellation,
			premiumValue: plans[2].cancellation,
		} as PlanHasFeatureSection,
		{
			title: strings.onboarding.selectIdealPlan.firstMonthFreeTitle,
			basicValue: plans[0].firstMonthFree,
			standardValue: plans[1].firstMonthFree,
			premiumValue: plans[2].firstMonthFree,
		} as PlanHasFeatureSection,
	];
};

export default PlanFeaturesList;

const styles = StyleSheet.create({
	container: {},
});
