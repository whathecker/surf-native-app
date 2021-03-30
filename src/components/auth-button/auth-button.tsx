import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { Typography, Icon, Container } from "../../styles";
import { AuthButtonProps } from "./types";
import { capitalizeFirstChar } from "../../utils";

const AuthButton: React.FC<AuthButtonProps> = ({
  authBrand,
}: AuthButtonProps) => {
  let authBrandIcon;

  authBrand === "apple"
    ? (authBrandIcon = require(`../../../assets/icons/auth-icons/apple.png`))
    : null;

  return (
    <TouchableOpacity style={styles.authButton}>
      <Image style={styles.brandIcon} source={authBrandIcon} />
      <Text style={styles.buttonText}>{`Sign Up with ${capitalizeFirstChar(
        authBrand,
      )}`}</Text>
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
    marginRight: 25,
  },
  buttonText: {
    ...Typography.p,
    color: "white",
  },
});

export default AuthButton;
