import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Typography, Icon, Container } from "../styles";

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
        <Text style={styles.headerText}>Sign Up Screen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    ...Container.centerAlignedContainer,
    paddingTop: 80,
    paddingBottom: 50,
  },
  iconImage: {
    ...Icon.appIconLarge,
  },
  textWrapper: {
    ...Container.centerAlignedContainer,
    paddingTop: 15,
    paddingBottom: 15,
  },
  headerText: {
    ...Typography.h1,
  },
});

export default SignUpScreen;
