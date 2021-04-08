export type SurfProfile = {
  surfLevelScore: number | null;
};

export type SurfLevel = "novice" | "beginner" | "intermediate" | "advanced";

export type SelectedSurfLevel = SurfLevel | null;

export type SurfLevelAnswerOption = {
  key: number;
  option: string;
};

export type SurfLevelQuestion = {
  question: string;
  options: SurfLevelAnswerOption[];
  answer: number | null;
};

export type SurfLevelQuestionsHolder = {
  selectedSurfLevel: SelectedSurfLevel;
  currenctIndex: number;
  questions: SurfLevelQuestion[] | null;
};
