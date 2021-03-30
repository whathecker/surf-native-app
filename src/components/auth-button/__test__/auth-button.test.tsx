import * as React from "react";
import renderer from "react-test-renderer";
import AuthButton from "../auth-button";
//import { AuthButtonProps } from '../types';

describe("Test AuthButton component", () => {
  it("should renders apple auth button correctly", () => {
    const tree = renderer.create(<AuthButton authBrand="apple" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should renders facebook auth button correctly", () => {
    const tree = renderer.create(<AuthButton authBrand="facebook" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should renders google auth button correctly", () => {
    const tree = renderer.create(<AuthButton authBrand="facebook" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
