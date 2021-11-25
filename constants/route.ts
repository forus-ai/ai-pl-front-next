import { UrlObject } from 'url';
import deepFreeze from 'utils/deepFreeze';

export const ROUTE_DRAWER = {
  PROJECTS_SORT_DRAWER: (currentQuery?: Record<string, any>) => {
    return <UrlObject>{
      query: { ...currentQuery, 'sort-drawer': 'open' },
    };
  },
};

export const ROUTE_MODAL = {
  TEST_MODAL: (currentQuery?: Record<string, any>) => {
    return <UrlObject>{
      query: { ...currentQuery, 'test-modal': 'open' },
    };
  },
  TEST_MODAL2: (currentQuery?: Record<string, any>) => {
    return <UrlObject>{
      query: { ...currentQuery, 'test-modal2': 'open' },
    };
  },
};

export const ROUTE = deepFreeze({
  MAIN: '/',
  LOGIN: '/login',
  SIGN_UP: '/signup',
  TEST_PAGE: '/test-page',
  INFORMATION: '/information',
  DASHBOARD: '/dashboard',
  PREPARE: {
    MAIN: '/prepare',
    MODEL_HOUSE: '/prepare/model-house',
    MODEL_HOUSE_RESULT: '/prepare/model-house/result',
    BUDGET_SOLUTION: '/prepare/budget-solution',
    BUDGET_SOLUTION_RESULT: '/prepare/budget-solution/result',
    SEARCH_LAND_INFO: '/prepare/search-land-info',
  },
  PLAN: {
    MAIN: '/plan',
  },
  COMPLETION_PROJECTS: '/completion-projects',
  COMPLETION_PROJECT_DETAIL: (id: string | number) =>
    `/completion-projects/${id}`,

  INTRODUCE: (type: IntroduceQueryParam = 'preparation') => {
    switch (type) {
      case 'preparation':
        return <UrlObject>{
          pathname: '/introduce',
          query: { type: 'preparation' },
        };
      case 'plan':
        return <UrlObject>{ pathname: '/introduce', query: { type: 'plan' } };
    }
  },
  ...ROUTE_DRAWER,
  ...ROUTE_MODAL,
});
