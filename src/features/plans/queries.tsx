import { useQuery } from '@tanstack/react-query';
import PlanService from 'services/api/endpoints/plans';

export const usePlans = () =>
	useQuery({
		queryKey: ['plans'],
		queryFn: () => PlanService.fetchPlans(),
	});
