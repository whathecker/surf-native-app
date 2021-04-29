import React from "react";
import { AuthAction, AuthActionType } from "./types";
import { authApi } from "../../api";
import { secureStorage, navigationRef, handleAuthError } from "../../utils";

export const signIn = (dispatch: React.Dispatch<AuthAction>) => {
  return async (authIdp: string): Promise<void> => {
    try {
      const { verifier, code, redirectUrl } = await authApi.handleOAuth(
        authIdp,
      );
      const result = await authApi.getAuthToken(code, verifier, redirectUrl);

      await secureStorage.save("token", result.authToken);

      dispatch({
        type: AuthActionType.signIn,
        payload: { token: result.authToken },
      });
      navigationRef.resetRoot("PostAuth");
    } catch (error) {
      dispatch({
        type: AuthActionType.error,
        payload: { token: null, errorMsg: error },
      });
    }
  };
};

export const restoreToken = (dispatch: React.Dispatch<AuthAction>) => {
  return async (): Promise<void> => {
    try {
      const authToken = await secureStorage.getValue("token");

      if (authToken === null) {
        navigationRef.resetRoot("Auth");
      } else {
        await authApi.checkTokenValidity(authToken);

        dispatch({
          type: AuthActionType.restore,
          payload: { token: authToken },
        });
        navigationRef.resetRoot("PostAuth");
      }
    } catch (error) {
      dispatch({
        type: AuthActionType.error,
        payload: { token: null, errorMsg: error.message },
      });
      handleAuthError();
    }
  };
};

export const signOut = (dispatch: React.Dispatch<AuthAction>) => {
  return async (): Promise<void> => {
    try {
      await authApi.clearAuthSession();
      await secureStorage.removeValue("token");

      dispatch({ type: AuthActionType.signOut });

      navigationRef.resetRoot("Auth");
    } catch (error) {
      dispatch({
        type: AuthActionType.error,
        payload: { token: null, errorMsg: error },
      });
    }
  };
};
