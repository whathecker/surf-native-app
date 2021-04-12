/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AuthState, AuthAction } from "./types";

export default (state: AuthState, action: AuthAction): AuthState => {
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
