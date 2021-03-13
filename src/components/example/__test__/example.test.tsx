import * as React from "react";
import renderer from "react-test-renderer";
import Example from "../example";

describe("Test Example component", () => {
  it("should renders correctly", () => {
    const tree = renderer.create(<Example />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
