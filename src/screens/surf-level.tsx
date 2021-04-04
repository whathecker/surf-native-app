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
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>Ask surf level here</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...Container.centerAlignedContainer,
    paddingTop: 120,
  },
  headerText: {
    ...Typography.h1,
  },
});

export default SurfLevelScreen;
