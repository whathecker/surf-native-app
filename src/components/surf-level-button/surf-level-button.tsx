import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Typography, Container } from "../../styles";
import { SurfLevelButtonProps } from "./types";
import { capitalizeFirstChar } from "../../utils";

const SurfLevelButton: React.FC<SurfLevelButtonProps> = ({
  surfLevel,
  selectedSurfLevel,
}: SurfLevelButtonProps) => {
  return (
    <TouchableOpacity
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

const surfLevelButtonStyle = {
  ...Container.centerAlignedContainer,
  width: "100%",
  paddingTop: 18,
  paddingBottom: 18,
  borderRadius: 12,
};

const styles = StyleSheet.create({
  inactiveSurfLevelButton: {
    ...surfLevelButtonStyle,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
  activeSurfLevelButton: {
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

export default SurfLevelButton;
