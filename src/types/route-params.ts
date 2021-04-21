import { SurfLevelQuestionsHolder } from "./surf-profile";

export type AuthStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
};

export type SurfLevelQuestionsStackParamList = {
  SurfLevel: undefined;
  BeginnerLevelQuestionsOne: SurfLevelQuestionsHolder | undefined;
  BeginnerLevelQuestionsTwo: SurfLevelQuestionsHolder | undefined;
  BeginnerLevelQuestionsThree: SurfLevelQuestionsHolder | undefined;
  BeginnerLevelQuestionsFour: SurfLevelQuestionsHolder | undefined;
  IntermediateLevelQuestionsOne: SurfLevelQuestionsHolder | undefined;
  IntermediateLevelQuestionsTwo: SurfLevelQuestionsHolder | undefined;
  IntermediateLevelQuestionsThree: SurfLevelQuestionsHolder | undefined;
  IntermediateLevelQuestionsFour: SurfLevelQuestionsHolder | undefined;
  IntermediateLevelQuestionsFive: SurfLevelQuestionsHolder | undefined;
  AdvancedLevelQuestionsOne: SurfLevelQuestionsHolder | undefined;
  AdvancedLevelQuestionsTwo: SurfLevelQuestionsHolder | undefined;
  AdvancedLevelQuestionsThree: SurfLevelQuestionsHolder | undefined;
  AdvancedLevelQuestionsFour: SurfLevelQuestionsHolder | undefined;
};

export type SurfLevelQuestionsRouteNames =
  | "BeginnerLevelQuestionsOne"
  | "BeginnerLevelQuestionsTwo"
  | "BeginnerLevelQuestionsThree"
  | "BeginnerLevelQuestionsFour"
  | "IntermediateLevelQuestionsOne"
  | "IntermediateLevelQuestionsTwo"
  | "IntermediateLevelQuestionsThree"
  | "IntermediateLevelQuestionsFour"
  | "IntermediateLevelQuestionsFive"
  | "AdvancedLevelQuestionsOne"
  | "AdvancedLevelQuestionsTwo"
  | "AdvancedLevelQuestionsThree"
  | "AdvancedLevelQuestionsFour";
