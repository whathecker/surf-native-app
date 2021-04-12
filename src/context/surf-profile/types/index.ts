import {
  SurfProfile,
  SurfLevelQuestionsHolder,
} from "../../../types/surf-profile";

export type SurfProfileState = {
  surfProfile?: SurfProfile;
  errorMsg?: string;
};

export type ContextProviderProps = {
  state: SurfProfileState;
  fetchSurfProfile: () => Promise<void>;
  createSurfProfile: (payload: SurfLevelQuestionsHolder) => Promise<void>;
};

export enum SurfProfileActionType {
  fetch = "FETCH_PROFILE",
  error = "ERROR",
}

export type SurfProfileAction = {
  type: SurfProfileActionType;
  payload?: SurfProfileState;
};
