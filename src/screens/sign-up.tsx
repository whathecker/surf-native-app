import * as React from "react";
import { View, Text, Image, Platform, StyleSheet } from "react-native";
import { Typography, Icon, Container } from "../styles";

import { AuthButton } from "../components";

const SignUpScreen: React.FunctionComponent = () => {
  return (
    <>
      <View style={styles.iconWrapper}>
        <Image
          style={styles.iconImage}
          source={require("../../assets/images/icon.png")}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.headerText}>Surf App</Text>
      </View>
      <View style={styles.textWrapper}>
        <View style={styles.textInnerWrapper}>
          <Text style={styles.bodyText}>
            In Surf Journal app you can explore and remember best surf condition
            for you
          </Text>
        </View>
      </View>
      <View style={styles.authButtonsWrapper}>
        {Platform.OS === "ios" ? (
          <View style={styles.btnInnerWrapper}>
            <AuthButton authBrand="apple" />
          </View>
        ) : null}
        <View style={styles.btnInnerWrapper}>
          <AuthButton authBrand="facebook" />
        </View>
        <View style={styles.btnInnerWrapper}>
          <AuthButton authBrand="google" />
        </View>
      </View>
      <View style={styles.signInWrapper}>
        <Text style={styles.bodyText}>Already have an account? Sign in</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    ...Container.centerAlignedContainer,
    paddingTop: "25%",
    paddingBottom: "10%",
  },
  iconImage: {
    ...Icon.appIconLarge,
  },
  textWrapper: {
    ...Container.centerAlignedContainer,
    paddingTop: "1.5%",
    paddingBottom: "1.5%",
  },
  textInnerWrapper: {
    width: "85%",
  },
  headerText: {
    ...Typography.h1,
    textAlign: "center",
  },
  bodyText: {
    ...Typography.p,
    textAlign: "center",
  },
  authButtonsWrapper: {
    ...Container.centerAlignedContainerVertical,
    paddingTop: "20%",
  },
  btnInnerWrapper: {
    width: "75%",
    paddingTop: 3,
    paddingBottom: 3,
  },
  signInWrapper: {
    paddingTop: 15,
  },
});

export default SignUpScreen;
