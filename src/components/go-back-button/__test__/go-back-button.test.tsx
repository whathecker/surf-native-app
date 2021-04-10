import * as React from "react";
import renderer from "react-test-renderer";
import GoBackButton from "../go-back-button";

describe("Test GoBackButton component", () => {
    it("should renders GoBackButton component correctly", () => {
        const tree = renderer.create(<GoBackButton />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});