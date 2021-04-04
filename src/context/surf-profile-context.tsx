/* eslint-disable @typescript-eslint/no-non-null-assertion  */
/* eslint-disable no-console  */
import React, { useReducer } from "react";
import { surfProfileApi } from "../api";
import { navigationRef } from "../utils";

type SurfProfileState = {
  surfLevelScore?: number | null;
  errorMsg?: string;
};

type ContextProviderProps = {
  state: SurfProfileState;
};

enum SurfProfileActionType {
  fetch = "FETCH_PROFILE",
  error = "ERROR",
}

type SurfProfileAction = {
  type: SurfProfileActionType;
  payload?: SurfProfileState;
};

const surfProfileReducer = (
  state: SurfProfileState,
  action: SurfProfileAction,
): SurfProfileState => {
  switch (action.type) {
    case "FETCH_PROFILE":
      return { ...state, ...action.payload! };
    case "ERROR":
      return { ...state, errorMsg: action.payload?.errorMsg };
    default:
      return { ...state };
  }
};

const fetchSurfProfile = (dispatch: React.Dispatch<SurfProfileAction>) => {
  return async () => {
    try {
      const surfProfile = await surfProfileApi.getSurfProfile(true);
      dispatch({
        type: SurfProfileActionType.fetch,
        payload: { ...surfProfile },
      });

      if (surfProfile.surfLevelScore === null) {
        console.log("Send User to Surf Question Screen");
      }

      if (surfProfile.surfLevelScore !== null) {
        navigationRef.resetRoot("App");
      }
    } catch (error) {
      dispatch({
        type: SurfProfileActionType.error,
        payload: { errorMsg: error },
      });
    }
  };
};

const defaultSurfProfileState: SurfProfileState = { surfLevelScore: null };

const defaultContextProviderProps: ContextProviderProps = {
  state: defaultSurfProfileState,
};

const SurfProfileContext = React.createContext(defaultContextProviderProps);

const SurfProfileContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    surfProfileReducer,
    defaultSurfProfileState,
  );

  const boundActions = {
    fetchSurfProfile: fetchSurfProfile(dispatch),
  };

  return (
    <SurfProfileContext.Provider value={{ state, ...boundActions }}>
      {children}
    </SurfProfileContext.Provider>
  );
};

export { SurfProfileContext, SurfProfileContextProvider };
