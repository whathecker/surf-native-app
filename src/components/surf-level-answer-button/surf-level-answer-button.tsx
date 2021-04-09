import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Typography, Button } from "../../styles";
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

const styles = StyleSheet.create({
  inactiveButton: {
    ...Button.inactiveAnswerButton,
  },
  activeButton: {
    ...Button.activeAnswerButton,
  },
  buttonText: {
    ...Typography.p,
    color: "black",
  },
});

export default SurfLevelAnswerButton;
