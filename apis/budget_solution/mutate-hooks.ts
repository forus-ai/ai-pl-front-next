import { MutationHookParams } from 'apis/type';
import { MUTATION_KEY } from 'constants/mutation-keys';
import { useMutation } from 'react-query';
import { createBudgetSolution } from '.';

export const useCreateBudgetSolutionMutation = (
  params?: MutationHookParams<typeof createBudgetSolution>,
) => {
  return useMutation(createBudgetSolution, {
    mutationKey: MUTATION_KEY.CREATE_BUDGET_SOLUTION,
    ...params?.options,
  });
};
