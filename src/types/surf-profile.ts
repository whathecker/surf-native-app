export type SurfProfile = {
  surfLevelScore: number | null;
};

export type SurfLevel = "novice" | "beginner" | "intermediate" | "advanced";

export type SelectedSurfLevel = SurfLevel | null;

export type SurfLevelAnswerKey = 0 | 1 | 2;

export type SurfLevelAnswerOption = {
  key: SurfLevelAnswerKey;
  option: string;
};

export type SelectedSurfLevelAnswer = SurfLevelAnswerKey | null;

export type SurfLevelQuestion = {
  question: string;
  options: SurfLevelAnswerOption[];
  answer: SelectedSurfLevelAnswer;
};

export type SurfLevelQuestionsHolder = {
  selectedSurfLevel: SelectedSurfLevel;
  currenctIndex: number;
  questions: SurfLevelQuestion[] | null;
};
