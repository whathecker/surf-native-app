import * as React from "react";
import renderer from "react-test-renderer";
import SurfLevelButton from "../surf-level-button";

describe("Test SurfLevelButton", () => {
  it("should renders surf level button correctly", () => {
    const tree = renderer.create(<SurfLevelButton />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
