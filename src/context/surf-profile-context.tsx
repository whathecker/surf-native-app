/* eslint-disable @typescript-eslint/no-non-null-assertion  */
/* eslint-disable no-console  */
import React, { useReducer } from "react";
import { surfProfileApi } from "../api";
import { SurfProfile, SurfLevelQuestionsHolder } from "../types/surf-profile";
import { navigationRef } from "../utils";

type SurfProfileState = {
  surfProfile?: SurfProfile;
  errorMsg?: string;
};

type ContextProviderProps = {
  state: SurfProfileState;
  fetchSurfProfile: () => Promise<void>;
  createSurfProfile: (payload: SurfLevelQuestionsHolder) => Promise<void>;
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
      const surfProfile = await surfProfileApi.getSurfProfile(false);
      dispatch({
        type: SurfProfileActionType.fetch,
        payload: { surfProfile },
      });

      if (surfProfile.surfLevelScore === null) {
        navigationRef.resetRoot("SurfProfileQuestions");
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

const createSurfProfile = (dispatch: React.Dispatch<SurfProfileAction>) => {
  return async (apiPayload: SurfLevelQuestionsHolder) => {
    try {
      const surfProfile = await surfProfileApi.postSurfProfile(apiPayload);

      dispatch({
        type: SurfProfileActionType.fetch,
        payload: { surfProfile },
      });

      navigationRef.resetRoot("App");
    } catch (error) {
      dispatch({
        type: SurfProfileActionType.error,
        payload: { errorMsg: error },
      });
    }
  };
};

const defaultSurfProfileState: SurfProfileState = {
  surfProfile: { surfLevelScore: null },
};

const defaultContextProviderProps: ContextProviderProps = {
  state: defaultSurfProfileState,
  fetchSurfProfile: () => Promise.resolve(),
  createSurfProfile: () => Promise.resolve(),
};

const SurfProfileContext = React.createContext(defaultContextProviderProps);

const SurfProfileContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    surfProfileReducer,
    defaultSurfProfileState,
  );

  const boundActions = {
    fetchSurfProfile: fetchSurfProfile(dispatch),
    createSurfProfile: createSurfProfile(dispatch),
  };

  return (
    <SurfProfileContext.Provider value={{ state, ...boundActions }}>
      {children}
    </SurfProfileContext.Provider>
  );
};

export { SurfProfileContext, SurfProfileContextProvider };
