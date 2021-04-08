import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Typography, Container } from "../../styles";
import { SurfLevelAnswerButtonProps } from "./types";

const SurfLevelAnswerButton: React.FC<SurfLevelAnswerButtonProps> = ({
  answerOption: { key, option },
  keyOfSelectedAnswer,
  handleButtonPress,
}: SurfLevelAnswerButtonProps) => {
  return (
    <TouchableOpacity
      style={
        isButtonSelected(key, keyOfSelectedAnswer)
          ? styles.activeButton
          : styles.inactiveButton
      }
      onPress={() => {
        handleButtonPress(key);
      }}
    >
      <Text>{option}</Text>
    </TouchableOpacity>
  );
};

const isButtonSelected = (
  keyOfAnswerOption: number,
  keyOfSelectedAnswer: number | null,
): boolean => {
  return keyOfAnswerOption === keyOfSelectedAnswer;
};

// TODO: duplicated style declaration, modularize it!
const surfLevelButtonStyle = {
  ...Container.centerAlignedContainer,
  width: "100%",
  paddingTop: 18,
  paddingBottom: 18,
  borderRadius: 12,
};

const styles = StyleSheet.create({
  inactiveButton: {
    ...surfLevelButtonStyle,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
  activeButton: {
    ...surfLevelButtonStyle,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "blue",
  },
  buttonText: {
    ...Typography.p,
    color: "black",
  },
});

export default SurfLevelAnswerButton;
