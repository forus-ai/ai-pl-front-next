import {
  getSessionStorage,
  removeSessionStorage,
  setSessionStorage,
} from '../helper';

const key = 'budget-solution-result-data';
export const getBudgetSolutionResultFromSessionStorage = () => {
  const token = getSessionStorage<BudgetSolution>(key);
  return token;
};

export const setBudgetSolutionResultToSessionStorage = (
  data: BudgetSolution,
) => {
  setSessionStorage(key, data);
};

export const deleteBudgetSolutionResultFromSessionStorage = () => {
  removeSessionStorage(key);
};
