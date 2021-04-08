/* eslint-disable no-console */
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Typography, Container } from "../../styles";
import { SurfLevelAnswerButtonProps } from "./types";

const SurfLevelAnswerButton: React.FC<SurfLevelAnswerButtonProps> = ({
  answerOption: { key, option },
}: SurfLevelAnswerButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.inactiveButton}
      onPress={() => {
        console.log(key);
      }}
    >
      <Text>{option}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inactiveButton: {
    ...Container.centerAlignedContainer,
    width: "100%",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 12,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    ...Typography.p,
    color: "black",
  },
});

export default SurfLevelAnswerButton;
