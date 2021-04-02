import React, { useReducer } from "react";
import { authApi } from "../api";
import { secureStorage } from "../utils";

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

const signIn = (dispatch: React.Dispatch<AuthAction>) => {
  return async (authCode: string) => {
    try {
      const result = await authApi.getAuthToken(authCode);
      await secureStorage.save("token", result.authToken);

      dispatch({
        type: AuthActionType.signIn,
        payload: { token: result.authToken },
      });
      // TODO: add navigation to next screen
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
        //TODO: send user to sign-in screen
      }

      if (authToken) {
        dispatch({
          type: AuthActionType.restore,
          payload: { token: authToken },
        });
        //TODO: send user to right next step
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
