import {
  SurfLevelAnswerOption,
  SelectedSurfLevelAnswer,
} from "../../../types/surf-profile";

export type SurfLevelAnswerButtonProps = {
  answerOption: SurfLevelAnswerOption;
  keyOfSelectedAnswer: SelectedSurfLevelAnswer;
  handleButtonPress: (input: SelectedSurfLevelAnswer) => void;
};
