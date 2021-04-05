import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Typography, Container } from "../../styles";
import { SurfLevelButtonProps } from "./types";
import { capitalizeFirstChar } from "../../utils";

const SurfLevelButton: React.FC<SurfLevelButtonProps> = ({
  surfLevel,
}: SurfLevelButtonProps) => {
  return (
    <TouchableOpacity style={styles.surfLevelButton}>
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

const styles = StyleSheet.create({
  surfLevelButton: {
    ...Container.centerAlignedContainer,
    width: "100%",
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    paddingTop: 18,
    paddingBottom: 18,
    borderRadius: 12,
  },
  buttonText: {
    ...Typography.p,
    color: "black",
  },
});

export default SurfLevelButton;
