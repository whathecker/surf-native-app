import * as React from "react";
import renderer from "react-test-renderer";
import SurfLevelButton from "../surf-level-button";

describe("Test SurfLevelButton - inactive state", () => {
  it("should renders inactive surf level button for novice level correctly", () => {
    const tree = renderer
      .create(
        <SurfLevelButton selectedSurfLevel="beginner" surfLevel="novice" />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should renders inactive surf level button for beginner level correctly", () => {
    const tree = renderer
      .create(
        <SurfLevelButton selectedSurfLevel="novice" surfLevel="beginner" />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should renders inactive surf level button for intermediate level correctly", () => {
    const tree = renderer
      .create(
        <SurfLevelButton
          selectedSurfLevel="advanced"
          surfLevel="intermediate"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should renders inactive surf level button for advanced level correctly", () => {
    const tree = renderer
      .create(
        <SurfLevelButton
          selectedSurfLevel="intermediate"
          surfLevel="advanced"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Test SurfLevelButton - active state", () => {
  it("should renders active surf level button for novice level correctly", () => {
    const tree = renderer
      .create(<SurfLevelButton selectedSurfLevel="novice" surfLevel="novice" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should renders active surf level button for beginner level correctly", () => {
    const tree = renderer
      .create(
        <SurfLevelButton selectedSurfLevel="beginner" surfLevel="beginner" />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should renders active surf level button for intermediate level correctly", () => {
    const tree = renderer
      .create(
        <SurfLevelButton
          selectedSurfLevel="intermediate"
          surfLevel="intermediate"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should renders active surf level button for advanced level correctly", () => {
    const tree = renderer
      .create(
        <SurfLevelButton selectedSurfLevel="advanced" surfLevel="advanced" />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
