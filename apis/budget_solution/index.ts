import instance from 'apis/config';

const baseUrl = '/buget_solution/';

export async function getBudgetSolutions(): Promise<BudgetSolution[]> {
  const { data } = await instance({
    method: 'GET',
    url: baseUrl,
  });

  return data;
}

export async function getBudgetSolutionById(variables: {
  id: number;
}): Promise<BudgetSolution> {
  const { data } = await instance({
    method: 'GET',
    url: baseUrl,
    data: variables,
  });

  return data;
}

export async function createBudgetSolution(
  variables: BudgetSolutionForm,
): Promise<BudgetSolution> {
  const { data } = await instance({
    method: 'POST',
    url: baseUrl,
    data: variables,
  });

  return data;
}
