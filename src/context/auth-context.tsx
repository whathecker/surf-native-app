import React, { useReducer } from "react";

type AuthState = {
  token: string | null;
};

enum AuthActionType {
  restore = "RESTORE_TOKEN",
  signIn = "SIGN_IN",
  signOut = "SIGN_OUT",
}

type AuthAction = {
  type: AuthActionType;
  payload?: AuthState;
};

const defaultValue: AuthState = {
  token: null,
};

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return { token: "", ...state };
    case "SIGN_IN":
      return { token: "", ...state };
    case "SIGN_OUT":
      return { token: null, ...state };
    default:
      return { ...state };
  }
};

const AuthContext = React.createContext(defaultValue);

const AuthContextProvider: React.FunctionComponent = ({ children }) => {
  const [state] = useReducer(authReducer, defaultValue);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
