import { ViewStyle } from "react-native";
import * as Container from "./container";

export const centerAlignedButtonShape: ViewStyle = {
  ...Container.centerAlignedContainer,
  width: "100%",
  paddingTop: 18,
  paddingBottom: 18,
  borderRadius: 12,
};

export const flexstartButtonShape: ViewStyle = {
  ...Container.flexStartContainer,
  width: "100%",
  paddingTop: 18,
  paddingBottom: 18,
  borderRadius: 12,
};

export const inactiveAnswerButton: ViewStyle = {
  ...centerAlignedButtonShape,
  backgroundColor: "white",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "black",
};

export const activeAnswerButton: ViewStyle = {
  ...centerAlignedButtonShape,
  backgroundColor: "white",
  borderStyle: "solid",
  borderWidth: 2,
  borderColor: "blue",
};

export const authButtonBasic: ViewStyle = {
  ...flexstartButtonShape,
  backgroundColor: "white",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "black",
};

export const appleAuthButton: ViewStyle = {
  ...flexstartButtonShape,
  backgroundColor: "black",
};

export const facebookAuthButton: ViewStyle = {
  ...flexstartButtonShape,
  backgroundColor: "blue",
};
