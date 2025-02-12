import { PlanData } from 'features/plans/types';

interface GetPlansResponse {
	plans: PlanData[];
	error?: boolean;
}

const PlanService = {
	fetchPlans: async () => {
		const plansData = [
			{
				id: 1,
				title: 'Básico',
				currency: 'US$',
				price: 8.99,
				hdAvailable: false,
				ultraHdAvailable: false,
				screenAvailable: false,
				devicesAvailable: true,
				unlimitedMovies: true,
				cancellation: true,
				firstMonthFree: true,
			} as PlanData,
			{
				id: 2,
				title: 'Estándar',
				currency: 'US$',
				price: 12.99,
				hdAvailable: true,
				ultraHdAvailable: true,
				screenAvailable: true,
				devicesAvailable: true,
				unlimitedMovies: true,
				cancellation: true,
				firstMonthFree: true,
			} as PlanData,
			{
				id: 3,
				title: 'Premium',
				currency: 'US$',
				price: 15.99,
				hdAvailable: true,
				ultraHdAvailable: true,
				screenAvailable: true,
				devicesAvailable: true,
				unlimitedMovies: true,
				cancellation: true,
				firstMonthFree: true,
			} as PlanData,
		];
		const response = {
			plans: plansData,
			error: false,
		} as GetPlansResponse;
		return response;
	},
};

export default PlanService;
