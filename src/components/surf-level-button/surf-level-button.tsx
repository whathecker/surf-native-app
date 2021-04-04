import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Typography, Container } from "../../styles";

const SurfLevelButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.surfLevelButton}>
      <Text style={styles.buttonText}>{"I've never surfed before"}</Text>
    </TouchableOpacity>
  );
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
