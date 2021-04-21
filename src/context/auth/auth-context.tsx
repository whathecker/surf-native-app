import React, { useReducer } from "react";
import { AuthState, AuthContextProviderProps } from "./types";
import authReducer from "./auth-reducer";
import { signIn, signOut, restoreToken } from "./auth-actions";

const defaultAuthState: AuthState = { token: null };

const defaultContextProviderProps: AuthContextProviderProps = {
  state: defaultAuthState,
  signIn: () => Promise.resolve(),
  restoreToken: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
};

export const AuthContext = React.createContext(defaultContextProviderProps);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, defaultAuthState);

  const boundActions = {
    signIn: signIn(dispatch),
    restoreToken: restoreToken(dispatch),
    signOut: signOut(dispatch),
  };

  return (
    <AuthContext.Provider value={{ state, ...boundActions }}>
      {children}
    </AuthContext.Provider>
  );
};
