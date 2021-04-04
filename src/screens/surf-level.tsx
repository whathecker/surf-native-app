/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { SurfLevelQuestionsStackParamList } from "../types/route-params";
import { View, Text, StyleSheet } from "react-native";
import { Typography, Container } from "../styles";

type SurfLevelScreenNavProp = StackNavigationProp<
  SurfLevelQuestionsStackParamList,
  "SurfLevel"
>;
type Props = { navigation: SurfLevelScreenNavProp };

const SurfLevelScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>{"Tell us about your surf level"}</Text>
      </View>
      <View style={styles.surfLevelOptionsWrapper}>
        <View style={styles.buttonWrapper}>
          <Text>{"Beginner Button"}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Text>{"Beginner Button"}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Text>{"Beginner Button"}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Text>{"Beginner Button"}</Text>
        </View>
      </View>
      <View style={styles.nextStepButtonWrapper}>
        <Text>{"Next step button"}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    ...Container.centerAlignedContainer,
    flex: 1,
  },
  headerText: {
    ...Typography.h1,
  },
  surfLevelOptionsWrapper: {
    ...Container.centerAlignedContainerVertical,
    paddingTop: "2.5%",
  },
  buttonWrapper: {
    ...Container.centerAlignedContainer,
    paddingTop: 20,
    paddingBottom: 20,
  },
  nextStepButtonWrapper: {
    ...Container.centerAlignedContainer,
    flex: 1,
  },
});

export default SurfLevelScreen;
