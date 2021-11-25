import { breakpoints } from 'styles/theme/foundations/breakpoints';
import { RootState } from './state';

export type RootAction = {
  type: 'SET_DEVICE_SIZE';
  value: keyof typeof breakpoints | '';
};

const rootReducerSwitch: ReducerSwitchType<RootState, RootAction> = {
  SET_DEVICE_SIZE: (prevState, { value }) => {
    const updated = { ...prevState };
    if (value === 'lg') updated.isPc = true;
    else updated.isPc = false;
    if (value === 'md') updated.isTablet = true;
    else updated.isTablet = false;
    if (value === 'sm') updated.isMobile = true;
    else updated.isMobile = false;

    return { ...updated, deviceSize: value };
  },
};

export type RootReducer = React.Reducer<RootState, RootAction>;
export const rootReducer: RootReducer = (prevState, action) => {
  const reducerByType = rootReducerSwitch[action.type] as RootReducer;
  return reducerByType(prevState, action);
};
