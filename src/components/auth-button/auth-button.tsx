import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { Typography, Icon, Container } from "../../styles";

const AuthButton: React.FunctionComponent = () => {
  return (
    <TouchableOpacity style={styles.authButton}>
      <Image
        style={styles.brandIcon}
        source={require("../../../assets/icons/apple_white.png")}
      />
      <Text style={styles.buttonText}>Sign Up with Apple</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  authButton: {
    ...Container.centerAlignedContainer,
    width: "100%",
    backgroundColor: "black",
    paddingTop: 18,
    paddingBottom: 18,
    borderRadius: 12,
  },
  brandIcon: {
    ...Icon.authBrandIcon,
    marginRight: 15,
  },
  buttonText: {
    ...Typography.p,
    color: "white",
  },
});

export default AuthButton;
