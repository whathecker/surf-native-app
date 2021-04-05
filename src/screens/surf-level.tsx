/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import * as React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { SurfLevelQuestionsStackParamList } from "../types/route-params";
import { SurfLevel } from "../types/surf-profile";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { Typography, Container } from "../styles";
import { SurfLevelButton } from "../components";

type SurfLevelScreenNavProp = StackNavigationProp<
  SurfLevelQuestionsStackParamList,
  "SurfLevel"
>;
type Props = { navigation: SurfLevelScreenNavProp };

type SurfLevelData = {
  key: string;
  value: SurfLevel;
};

type RenderFuncProps = { item: SurfLevelData };

const SurfLevelScreen: React.FC<Props> = ({ navigation }: Props) => {
  const surfLevels: SurfLevelData[] = [
    {
      key: "0",
      value: "novice",
    },
    {
      key: "1",
      value: "beginner",
    },
    {
      key: "2",
      value: "intermediate",
    },
    {
      key: "3",
      value: "advanced",
    },
  ];

  const renderSurfLevelButton = ({ item }: RenderFuncProps) => {
    return (
      <View style={styles.buttonWrapper}>
        <SurfLevelButton surfLevel={item.value} />
      </View>
    );
  };

  return (
    <>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>{"Tell us about your surf level"}</Text>
      </View>
      <View style={styles.surfLevelOptionsWrapper}>
        <FlatList
          data={surfLevels}
          renderItem={renderSurfLevelButton}
          keyExtractor={(item) => item.key}
        />
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
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  nextStepButtonWrapper: {
    ...Container.centerAlignedContainer,
    flex: 1,
  },
});

export default SurfLevelScreen;
