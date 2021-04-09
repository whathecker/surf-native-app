/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import renderer from "react-test-renderer";
import SurfLevelAnswerButton from "../surf-level-answer-button";
import { beginnerQuestions } from "../../../data/surf-level-questions";
import { SelectedSurfLevelAnswer } from "../../../types/surf-profile";

const mockPressHandler = (_input: SelectedSurfLevelAnswer): void => {
  return;
};

describe("Test SurfLevelAnswerButton inactive state", () => {
  it("should renders inactive surf level answer button correctly", () => {
    const tree = renderer
      .create(
        <SurfLevelAnswerButton
          handleButtonPress={mockPressHandler}
          keyOfSelectedAnswer={1}
          answerOption={beginnerQuestions[0].options[0]}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Test SurfLevelAnswerButton active state", () => {
  it("should renders active surf level answer button correctly", () => {
    const tree = renderer
      .create(
        <SurfLevelAnswerButton
          handleButtonPress={mockPressHandler}
          keyOfSelectedAnswer={1}
          answerOption={beginnerQuestions[0].options[1]}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
