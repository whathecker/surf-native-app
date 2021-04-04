import * as React from "react";
import renderer from "react-test-renderer";
import AuthButton from "../auth-button";
//import { AuthButtonProps } from '../types';

describe("Test AuthButton component", () => {
  it("should renders apple auth button correctly for sign-up screen", () => {
    const tree = renderer.create(<AuthButton screenType="signup" authBrand="apple" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should renders facebook auth button correctly for sign-up screen", () => {
    const tree = renderer.create(<AuthButton screenType="signup" authBrand="facebook" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should renders google auth button correctly for sign-up screen", () => {
    const tree = renderer.create(<AuthButton screenType="signup" authBrand="facebook" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should renders apple auth button correctly for sign-in screen", () => {
    const tree = renderer.create(<AuthButton screenType="signin" authBrand="apple" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should renders facebook auth button correctly for sign-in screen", () => {
    const tree = renderer.create(<AuthButton screenType="signin" authBrand="facebook" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should renders google auth button correctly for sign-in screen", () => {
    const tree = renderer.create(<AuthButton screenType="signin" authBrand="facebook" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
