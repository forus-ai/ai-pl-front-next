import { QueryHookParams } from 'apis/type';
import { QUERY_KEY } from 'constants/query-keys';
import { useQuery } from 'react-query';
import { getBudgetSolutionById, getBudgetSolutions } from '.';

export const useGetBudgetSolutionsQuery = (
  params?: QueryHookParams<typeof getBudgetSolutions>,
) => {
  return useQuery(
    [QUERY_KEY.BUDGET_SOLUTION],
    () => getBudgetSolutions(),
    params?.options,
  );
};

export const useGetBudgetSolutionByIdQuery = (
  params: QueryHookParams<typeof getBudgetSolutionById>,
) => {
  return useQuery(
    [QUERY_KEY.BUDGET_SOLUTION, params.variables],
    () => getBudgetSolutionById(params.variables),
    params.options,
  );
};
