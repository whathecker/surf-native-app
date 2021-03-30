import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
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
  authBrand === "google"
    ? (authBrandIcon = require("../../../assets/icons/auth-icons/google.png"))
    : null;
  authBrand === "facebook"
    ? (authBrandIcon = require("../../../assets/icons/auth-icons/facebook.png"))
    : null;

  let authBtnStyle;
  authBrand === "apple" ? (authBtnStyle = styles.authButtonApple) : null;
  authBrand === "facebook" ? (authBtnStyle = styles.authButtonFacebook) : null;
  authBrand === "google" ? (authBtnStyle = styles.authButton) : null;

  let btnTextStyle;
  authBrand === "google"
    ? (btnTextStyle = styles.buttonTextBlk)
    : (btnTextStyle = styles.buttonText);

  return (
    <TouchableOpacity style={authBtnStyle}>
      <View style={styles.iconContainer}>
        <Image style={styles.brandIcon} source={authBrandIcon} />
      </View>
      <Text style={btnTextStyle}>{`Sign Up with ${capitalizeFirstChar(
        authBrand,
      )}`}</Text>
    </TouchableOpacity>
  );
};

const authButtonStyle = {
  ...Container.flexStartContainer,
  width: "100%",
  paddingTop: 18,
  paddingBottom: 18,
  borderRadius: 12,
};

const styles = StyleSheet.create({
  authButton: {
    ...authButtonStyle,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
  authButtonApple: {
    ...authButtonStyle,
    backgroundColor: "black",
  },
  authButtonFacebook: {
    ...authButtonStyle,
    backgroundColor: "blue",
  },
  iconContainer: {
    marginRight: 35,
  },
  brandIcon: {
    ...Icon.authBrandIcon,
    marginLeft: 20,
  },
  buttonText: {
    ...Typography.p,
    color: "white",
  },
  buttonTextBlk: {
    ...Typography.p,
    color: "black",
  },
});

export default AuthButton;
