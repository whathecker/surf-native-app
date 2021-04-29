import React from "react";
import { surfProfileApi } from "../../api";
import { navigationRef, handleAuthError } from "../../utils";
import { SurfProfileAction, SurfProfileActionType } from "./types";
import { SurfLevelQuestionsHolder } from "../../types/surf-profile";

export const fetchSurfProfile = (
  dispatch: React.Dispatch<SurfProfileAction>,
) => {
  return async (): Promise<void> => {
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
      if (error.type === "auth") {
        handleAuthError();
      } else {
        dispatch({
          type: SurfProfileActionType.error,
          payload: { errorMsg: error.message },
        });
      }
    }
  };
};

export const createSurfProfile = (
  dispatch: React.Dispatch<SurfProfileAction>,
) => {
  return async (apiPayload: SurfLevelQuestionsHolder): Promise<void> => {
    try {
      const surfProfile = await surfProfileApi.postSurfProfile(apiPayload);

      dispatch({
        type: SurfProfileActionType.fetch,
        payload: { surfProfile },
      });

      navigationRef.resetRoot("App");
    } catch (error) {
      if (error.type === "auth") {
        handleAuthError();
      } else {
        dispatch({
          type: SurfProfileActionType.error,
          payload: { errorMsg: error },
        });
      }
    }
  };
};
