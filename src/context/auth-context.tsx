/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer } from "react";

type AuthState = {
  token: string | null;
  errorMsg?: string;
};

type ContextProviderProps = {
  state: AuthState;
};

enum AuthActionType {
  restore = "RESTORE_TOKEN",
  signIn = "SIGN_IN",
  signOut = "SIGN_OUT",
  error = "ERROR",
}

type AuthAction = {
  type: AuthActionType;
  payload?: AuthState;
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return { token: action.payload?.token, ...state };
    case "SIGN_IN":
      return { token: action.payload?.token, ...state };
    case "SIGN_OUT":
      return { token: null, ...state };
    case "ERROR":
      return { token: null, errorMsg: action.payload?.errorMsg };
    default:
      return { ...state };
  }
};

const signIn = (_dispatch: React.Dispatch<AuthAction>) => {
  return async () => {
    // call backend with auth0 access code to get the token
    // when call was successful store the token in the SecureStorage and update the state by calling SIGN_IN action
    // when it failed, update the state with error message
  };
};

const restoreToken = (_dispatch: React.Dispatch<AuthAction>) => {
  return async () => {
    // try to fetch token from local storage
    // when successfully fetch the token then update the state by calling RESTORE_TOKEN action and send user to home screen
    // when it failed to find the token send the user to sign-in screen
  };
};

const defaultAuthState: AuthState = { token: null };

const defaultContextProviderProps: ContextProviderProps = {
  state: defaultAuthState,
};

const AuthContext = React.createContext(defaultContextProviderProps);

const AuthContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, defaultAuthState);

  const boundActions = {
    signIn: signIn(dispatch),
    restoreToken: restoreToken(dispatch),
  };

  return (
    <AuthContext.Provider value={{ state, ...boundActions }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
