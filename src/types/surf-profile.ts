export type SurfProfile = {
  surfLevelScore: number | null;
};

export type SurfLevel = "novice" | "beginner" | "intermediate" | "advanced";

export type SelectedSurfLevel = SurfLevel | null;

export type SurfLevelAnswerOption = {
  key: 0 | 1 | 2;
  option: string;
};

export type SelectedSurfLevelAnswer = 0 | 1 | 2 | null;

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
