import React, { useReducer } from "react";

type Reducer = <S, A>(state: S, action: A) => S;

type ActionInnerFunc = () => Promise<void>;
type ActionFunc = (dispatch: React.Dispatch<unknown>) => ActionInnerFunc;
type Actions = Record<string, ActionFunc>;

type DefaultState = Record<string, unknown>;

type ContextPair<T> = { Context: React.Context<T>; Provider: React.FC };

export default (
  reducer: Reducer,
  actions: Actions,
  defaultState: DefaultState,
): ContextPair<DefaultState> => {
  const Context = React.createContext(defaultState);

  const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const boundActions: Record<string, ActionInnerFunc> = {};
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return <Context.Provider value={{ state }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
