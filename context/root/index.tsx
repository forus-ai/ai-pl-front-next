import React from 'react';
import useDeviceSize from 'utils/useDeviceSize';
import { useRootHandler } from './handler';
import { RootAction, rootReducer } from './reducer';
import { RootState, rootState } from './state';

type RootContextValue = {
  state: RootState;
  dispatch: React.Dispatch<RootAction>;
  handler: ReturnType<typeof useRootHandler>;
};
const Context = React.createContext<RootContextValue>({} as RootContextValue);

export const useRootContext = () => React.useContext(Context);

export const RootContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(rootReducer, rootState);
  const handler = useRootHandler({ state, dispatch });
  const deviceSize = useDeviceSize();

  const value = React.useMemo(
    () => ({
      state,
      dispatch,
      handler,
    }),
    [handler, state],
  );

  // For: set devise size
  React.useEffect(() => {
    dispatch({ type: 'SET_DEVICE_SIZE', value: deviceSize });
  }, [deviceSize]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export const withRootContext = (Component: React.FC<any>) => {
  return function WrappedComponent(props: any) {
    return (
      <RootContextProvider>
        <Component {...props} />
      </RootContextProvider>
    );
  };
};
