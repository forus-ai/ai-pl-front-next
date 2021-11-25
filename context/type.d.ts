type DispatchArg = {
  type: string;
  variables?: any;
};

type MyReducer<S, A extends DispatchArg> = React.Reducer<S, A>;

type ActionByType<A extends DispatchArg = DispatchArg, T extends string> = Extract<A, { type: T }>;

type ReducerSwitchType<S extends Obj, A extends DispatchArg> = {
  [T in A['type']]: MyReducer<S, ActionByType<A, T>>;
};
