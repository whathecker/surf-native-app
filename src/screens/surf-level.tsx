/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import * as React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { SurfLevelQuestionsStackParamList } from "../types/route-params";
import { View, Text, Button, StyleSheet } from "react-native";
import { Typography, Container } from "../styles";
import { SurfLevelButton } from "../components";

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
          <SurfLevelButton />
        </View>
        <View style={styles.buttonWrapper}>
          <SurfLevelButton />
        </View>
        <View style={styles.buttonWrapper}>
          <SurfLevelButton />
        </View>
        <View style={styles.buttonWrapper}>
          <SurfLevelButton />
        </View>
      </View>
      <View style={styles.nextStepButtonWrapper}>
        <Button
          title="Next"
          color="blue"
          onPress={() => {
            console.log("button clicked");
          }}
        />
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
    width: "70%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  nextStepButtonWrapper: {
    ...Container.centerAlignedContainer,
    flex: 1,
  },
});

export default SurfLevelScreen;
