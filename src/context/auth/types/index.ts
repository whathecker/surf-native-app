export type AuthState = {
  token: string | null;
  errorMsg?: string;
};

export type AuthContextProviderProps = {
  state: AuthState;
  signIn: (authIdp: string) => Promise<void>;
  restoreToken: () => Promise<void>;
  signOut: () => Promise<void>;
};

export enum AuthActionType {
  restore = "RESTORE_TOKEN",
  signIn = "SIGN_IN",
  signOut = "SIGN_OUT",
  error = "ERROR",
}

export type AuthAction = {
  type: AuthActionType;
  payload?: AuthState;
};
