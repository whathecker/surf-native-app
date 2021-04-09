import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Typography, Button } from "../../styles";
import { SurfLevelButtonProps } from "./types";
import { capitalizeFirstChar } from "../../utils";

const SurfLevelButton: React.FC<SurfLevelButtonProps> = ({
  surfLevel,
  selectedSurfLevel,
  handleButtonPress,
}: SurfLevelButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleButtonPress(surfLevel);
      }}
      style={
        isButtonSelected(surfLevel, selectedSurfLevel)
          ? styles.activeSurfLevelButton
          : styles.inactiveSurfLevelButton
      }
    >
      <Text style={styles.buttonText}>
        {capitalizeFirstChar(renderSurfLevelBtnText(surfLevel))}
      </Text>
    </TouchableOpacity>
  );
};

const renderSurfLevelBtnText = (surfLevel: string): string => {
  let result = "";
  surfLevel === "novice"
    ? (result = "I've never surfed before")
    : (result = surfLevel);
  return result;
};

const isButtonSelected = (
  surfLevel: string,
  selectedSurfLevel: string | null,
): boolean => {
  return surfLevel === selectedSurfLevel;
};

const styles = StyleSheet.create({
  inactiveSurfLevelButton: {
    ...Button.inactiveAnswerButton,
  },
  activeSurfLevelButton: {
    ...Button.activeAnswerButton,
  },
  buttonText: {
    ...Typography.p,
    color: "black",
  },
});

export default SurfLevelButton;
