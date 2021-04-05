import { SelectedSurfLevel } from "./surf-profile";

export type AuthStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
};

export type SurfLevelQuestionsStackParamList = {
  SurfLevel: undefined;
  SurfLevelQuestions: { selectedLevel: SelectedSurfLevel } | undefined;
};
