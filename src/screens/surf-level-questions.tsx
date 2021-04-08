/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import {
  SurfLevelQuestionsStackParamList,
  SurfLevelQuestionsRouteNames,
} from "../types/route-params";
import { View, Text, Button, StyleSheet } from "react-native";
import { Container, Typography } from "../styles";
import { SurfLevel } from "../types/surf-profile";

type SurfLevelQuestionsScreenNavProps = StackNavigationProp<
  SurfLevelQuestionsStackParamList,
  SurfLevelQuestionsRouteNames
>;
type SurfLevelQuestionsScreenRouteProps = RouteProp<
  SurfLevelQuestionsStackParamList,
  SurfLevelQuestionsRouteNames
>;

type Props = {
  route: SurfLevelQuestionsScreenRouteProps;
  navigation: SurfLevelQuestionsScreenNavProps;
};

const SurfLevelQuestionScreen: React.FC<Props> = ({
  route,
  navigation,
}: Props) => {
  const currentQuestionIndex = route.params?.currenctIndex || 0;
  const selectedLevel = route.params!.selectedSurfLevel;
  const questions = route.params!.questions!;
  const { question, options } = questions[currentQuestionIndex];

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>{`${question}?`}</Text>
        </View>
        <View style={styles.answerOptionsWrapper}>
          <View>
            <Text>{`${options[0].option}`}</Text>
          </View>
          <View>
            <Text>{`${options[1].option}`}</Text>
          </View>
          <View>
            <Text>{`${options[2].option}`}</Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Go Back"
            color="blue"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Button
            title="Next"
            color="blue"
            onPress={() => {
              const nextScreenName = findNextQuestionScreenName(
                selectedLevel,
                currentQuestionIndex,
              );

              if (nextScreenName) {
                navigation.navigate(nextScreenName, {
                  selectedSurfLevel: selectedLevel,
                  currenctIndex: currentQuestionIndex + 1,
                  questions: questions,
                });
              }
            }}
          />
        </View>
        
      </View>
    </>
  );
};

const findNextQuestionScreenName = (
  selectedLevel: SurfLevel | null,
  currentIndex: number,
): SurfLevelQuestionsRouteNames | null => {
  if (selectedLevel === "beginner") {
    return _getScreenNameBeginner(currentIndex);
  } else if (selectedLevel === "intermediate") {
    return _getScreenNameIntermediate(currentIndex);
  } else if (selectedLevel === "advanced") {
    return _getScreenNameAdvanced(currentIndex);
  } else {
    return null;
  }
};

const _getScreenNameBeginner = (
  currentIndex: number,
): SurfLevelQuestionsRouteNames | null => {
  switch (currentIndex) {
    case 0:
      return "BeginnerLevelQuestionsTwo";
    case 1:
      return "BeginnerLevelQuestionsThree";
    case 2:
      return "BeginnerLevelQuestionsFour";
    default:
      return null;
  }
};

const _getScreenNameIntermediate = (
  currentIndex: number,
): SurfLevelQuestionsRouteNames | null => {
  switch (currentIndex) {
    case 0:
      return "IntermediateLevelQuestionsTwo";
    case 1:
      return "IntermediateLevelQuestionsThree";
    case 2:
      return "IntermediateLevelQuestionsFour";
    case 3:
      return "IntermediateLevelQuestionsFive";
    default:
      return null;
  }
};

const _getScreenNameAdvanced = (
  currentIndex: number,
): SurfLevelQuestionsRouteNames | null => {
  switch (currentIndex) {
    case 0:
      return "AdvancedLevelQuestionsTwo";
    case 1:
      return "AdvancedLevelQuestionsThree";
    case 2:
      return "AdvancedLevelQuestionsFour";
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  wrapper: {
    ...Container.centerAlignedContainerVertical,
    flex: 1,
    paddingTop: "30%",
  },
  headerWrapper: {
    flex: 1,
    width: "95%",
    paddingLeft: "5%",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  },
  headerText: {
    ...Typography.h1,
  },
  answerOptionsWrapper: {
    flex: 3,
    paddingTop: "30%",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  },
  buttonWrapper: {
    flex: 2,
    paddingTop: "10%",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  }
});

export default SurfLevelQuestionScreen;
