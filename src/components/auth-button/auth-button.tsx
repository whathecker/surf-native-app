import React, { useContext } from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { Typography, Icon, Button } from "../../styles";
import { AuthButtonProps } from "./types";
import { capitalizeFirstChar } from "../../utils";
import { AuthContext } from "../../context/auth";

const AuthButton: React.FC<AuthButtonProps> = ({
  authBrand,
  screenType,
}: AuthButtonProps) => {
  const { signIn } = useContext(AuthContext);

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

  let buttonText = "Continue with";
  screenType === "signup" ? (buttonText = "Sign up with") : null;

  return (
    <TouchableOpacity onPress={() => signIn(authBrand)} style={authBtnStyle}>
      <View style={styles.iconContainer}>
        <Image style={styles.brandIcon} source={authBrandIcon} />
      </View>
      <Text style={btnTextStyle}>{`${buttonText} ${capitalizeFirstChar(
        authBrand,
      )}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  authButton: {
    ...Button.authButtonBasic,
  },
  authButtonApple: {
    ...Button.appleAuthButton,
  },
  authButtonFacebook: {
    ...Button.facebookAuthButton,
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
