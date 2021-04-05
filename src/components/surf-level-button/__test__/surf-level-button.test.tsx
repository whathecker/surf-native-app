import * as React from "react";
import renderer from "react-test-renderer";
import SurfLevelButton from "../surf-level-button";

describe("Test SurfLevelButton", () => {
  it("should renders surf level button for novice level correctly", () => {
    const tree = renderer
      .create(<SurfLevelButton surfLevel="novice" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should renders surf level button for beginner level correctly", () => {
    const tree = renderer
      .create(<SurfLevelButton surfLevel="beginner" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should renders surf level button for intermediate level correctly", () => {
    const tree = renderer
      .create(<SurfLevelButton surfLevel="intermediate" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should renders surf level button for advanced level correctly", () => {
    const tree = renderer
      .create(<SurfLevelButton surfLevel="advanced" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
