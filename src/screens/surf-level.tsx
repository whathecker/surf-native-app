/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { SurfLevelQuestionsStackParamList } from "../types/route-params";
import { SurfLevel, SelectedSurfLevel } from "../types/surf-profile";
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
  const [selectedLevel, setSelectedLevel] = useState<SelectedSurfLevel>(null);

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

  const updateSelectedLevel = (
    setSelectedLevel: React.Dispatch<React.SetStateAction<SelectedSurfLevel>>,
  ) => {
    return (selectedLevel: SelectedSurfLevel): void => {
      setSelectedLevel(selectedLevel);
    };
  };

  const renderSurfLevelButton = ({ item }: RenderFuncProps) => {
    return (
      <View style={styles.buttonWrapper}>
        <SurfLevelButton
          handleButtonPress={updateSelectedLevel(setSelectedLevel)}
          surfLevel={item.value}
          selectedSurfLevel={selectedLevel}
        />
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
          disabled={true}
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
