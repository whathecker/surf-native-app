/* eslint-disable no-console */
import React from "react";
import * as AuthSession from "expo-auth-session";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { Typography, Icon, Container } from "../../styles";
import { AuthButtonProps } from "./types";
import { capitalizeFirstChar } from "../../utils";

const auth0ClientId = "M6bdC9X6ACFckrMCBqxlaPK9t4Q1GKiA";
const auth0Domain = "https://dev-817dakf7.eu.auth0.com";

const _handlePressAsync = async (idp: string) => {
  const redirectUrl = AuthSession.makeRedirectUri({ useProxy: true });
  const authUrl =
    `${auth0Domain}/authorize` +
    toQueryString({
      client_id: auth0ClientId,
      connection: idp,
      response_type: "token",
      redirect_uri: redirectUrl,
    });
  const result = await AuthSession.startAsync({ authUrl });
  console.log(result);
};

function toQueryString(params: Record<string, string>) {
  return (
    "?" +
    Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join("&")
  );
}

const AuthButton: React.FC<AuthButtonProps> = ({
  authBrand,
  screenType,
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

  let buttonText = "Continue with";
  screenType === "signup" ? (buttonText = "Sign up with") : null;

  return (
    <TouchableOpacity
      onPress={() => {
        _handlePressAsync(authBrand);
      }}
      style={authBtnStyle}
    >
      <View style={styles.iconContainer}>
        <Image style={styles.brandIcon} source={authBrandIcon} />
      </View>
      <Text style={btnTextStyle}>{`${buttonText} ${capitalizeFirstChar(
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
