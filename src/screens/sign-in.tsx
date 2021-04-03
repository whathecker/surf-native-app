import * as React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../types/route-params";
import { View, Text, Image, StyleSheet } from "react-native";
import { Typography, Icon, Container } from "../styles";
import { AuthButton } from "../components";
import { shouldDisplayAppleSignin } from "../utils";

type SignInScreenNavProp = StackNavigationProp<AuthStackParamList, "SignIn">;
type Props = { navigation: SignInScreenNavProp };

const SignInScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.iconWrapper}>
        <Image
          style={styles.iconImage}
          source={require("../../assets/images/icon.png")}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.headerText}>Welcome Back!</Text>
      </View>
      <View style={styles.authButtonsWrapper}>
        {shouldDisplayAppleSignin() ? (
          <View style={styles.btnInnerWrapper}>
            <AuthButton authBrand="apple" screenType="signin" />
          </View>
        ) : null}
        <View style={styles.btnInnerWrapper}>
          <AuthButton authBrand="facebook" screenType="signin" />
        </View>
        <View style={styles.btnInnerWrapper}>
          <AuthButton authBrand="google" screenType="signin" />
        </View>
      </View>
      <View style={styles.signUpWrapper}>
        <Text style={styles.bodyText}>
          {"Don't have an account yet?"}{" "}
          <Text
            onPress={() => {
              navigation.navigate("SignUp");
            }}
            style={styles.signUpText}
          >
            Sign Up
          </Text>
        </Text>
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
  headerText: {
    ...Typography.h1,
    textAlign: "center",
  },
  bodyText: {
    ...Typography.p,
    textAlign: "center",
  },
  signUpText: {
    ...Typography.p,
    textAlign: "center",
    color: "blue",
  },
  authButtonsWrapper: {
    ...Container.centerAlignedContainerVertical,
    paddingTop: "31%",
  },
  btnInnerWrapper: {
    width: "75%",
    paddingTop: 3,
    paddingBottom: 3,
  },
  signUpWrapper: {
    paddingTop: 15,
  },
});

export default SignInScreen;
