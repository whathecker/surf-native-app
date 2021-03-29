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
        <Text>Add authentcation buttons here</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    ...Container.centerAlignedContainer,
    paddingTop: 100,
    paddingBottom: 20,
  },
  iconImage: {
    ...Icon.appIconLarge,
  },
  textWrapper: {
    ...Container.centerAlignedContainer,
    paddingTop: 12,
    paddingBottom: 12,
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
    ...Container.centerAlignedContainer,
    paddingTop: 70,
  },
});

export default SignUpScreen;
