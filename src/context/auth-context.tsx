/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useReducer } from "react";
import { authApi } from "../api";
import { secureStorage, navigationRef } from "../utils";

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
      return { ...state, token: action.payload!.token };
    case "SIGN_IN":
      return { ...state, token: action.payload!.token };
    case "SIGN_OUT":
      return { ...state, token: null };
    case "ERROR":
      return { token: null, errorMsg: action.payload?.errorMsg };
    default:
      return { ...state };
  }
};

const signIn = (dispatch: React.Dispatch<AuthAction>) => {
  return async (authIdp: string) => {
    try {
      const oauthResultCode = await authApi.handleOAuth(authIdp);
      const result = await authApi.getAuthToken(oauthResultCode);

      await secureStorage.save("token", result.authToken);

      dispatch({
        type: AuthActionType.signIn,
        payload: { token: result.authToken },
      });
      navigationRef.navigate("App");
    } catch (e) {
      dispatch({
        type: AuthActionType.error,
        payload: { token: null, errorMsg: e },
      });
    }
  };
};

const restoreToken = (dispatch: React.Dispatch<AuthAction>) => {
  return async () => {
    try {
      const authToken = await secureStorage.getValue("token");

      if (authToken === null) {
        navigationRef.navigate("SignIn");
      }

      if (authToken) {
        dispatch({
          type: AuthActionType.restore,
          payload: { token: authToken },
        });
        navigationRef.navigate("App");
      }
    } catch (e) {
      dispatch({
        type: AuthActionType.error,
        payload: { token: null, errorMsg: e },
      });
    }
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
